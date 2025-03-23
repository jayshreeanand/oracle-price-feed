interface PriceData {
  symbol: string;
  price: string;
  source: string;
}

interface PriceSource {
  name: string;
  fetchPrice: (symbol: string) => Promise<number>;
}

// Using CoinGecko instead of Chainlink for testing purposes
const coingeckoFetch = async (symbol: string): Promise<number> => {
  try {
    // Convert SOLUSDT -> solana, BTCUSDT -> bitcoin
    const coinId = symbol.toLowerCase().includes('sol') ? 'solana' : 'bitcoin';
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`);
    const data = await response.json();
    return data[coinId].usd;
  } catch (error) {
    console.error(`CoinGecko API error: ${error}`);
    throw error;
  }
};

const binanceFetch = async (symbol: string): Promise<number> => {
  try {
    const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
    const data = await response.json();
    return parseFloat(data.price);
  } catch (error) {
    console.error(`Binance API error: ${error}`);
    throw error;
  }
};

// Using Kucoin instead of Kraken
const kucoinFetch = async (symbol: string): Promise<number> => {
  try {
    // Convert SOLUSDT -> SOL-USDT
    const kucoinSymbol = `${symbol.slice(0, 3)}-${symbol.slice(3)}`;
    const response = await fetch(`https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${kucoinSymbol}`);
    const data = await response.json();
    return parseFloat(data.data.price);
  } catch (error) {
    console.error(`Kucoin API error: ${error}`);
    throw error;
  }
};

const gateioFetch = async (symbol: string): Promise<number> => {
  try {
    // Convert SOLUSDT -> sol_usdt
    const gateSymbol = `${symbol.slice(0, 3)}_${symbol.slice(3)}`.toLowerCase();
    const response = await fetch(`https://api.gateio.ws/api/v4/spot/tickers?currency_pair=${gateSymbol}`);
    const data = await response.json();
    return parseFloat(data[0].last);
  } catch (error) {
    console.error(`Gate.io API error: ${error}`);
    throw error;
  }
};

const priceSources: PriceSource[] = [
  { name: 'CoinGecko', fetchPrice: coingeckoFetch },
  { name: 'Binance', fetchPrice: binanceFetch },
  { name: 'Kucoin', fetchPrice: kucoinFetch },
  { name: 'Gate.io', fetchPrice: gateioFetch },
];

const CONSENSUS_THRESHOLD = 0.02; // 2% maximum difference for consensus
const MIN_SOURCES_REQUIRED = 3;

const findConsensusPrice = (prices: PriceData[]): number | null => {
  if (prices.length < MIN_SOURCES_REQUIRED) {
    return null;
  }

  // Sort prices
  const sortedPrices = [...prices].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  
  // Find median price as reference
  const median = parseFloat(sortedPrices[Math.floor(sortedPrices.length / 2)].price);
  
  // Filter prices within threshold
  const consensusPrices = sortedPrices.filter(p => {
    const price = parseFloat(p.price);
    const difference = Math.abs(price - median) / median;
    return difference <= CONSENSUS_THRESHOLD;
  });

  if (consensusPrices.length >= MIN_SOURCES_REQUIRED) {
    // Calculate average of consensus prices
    const sum = consensusPrices.reduce((acc, curr) => acc + parseFloat(curr.price), 0);
    return sum / consensusPrices.length;
  }

  return null;
};

const fetchPricesFromAllSources = async (symbol: string): Promise<PriceData[]> => {
  const pricePromises = priceSources.map(async source => {
    try {
      const price = await source.fetchPrice(symbol);
      return {
        symbol,
        price: price.toString(),
        source: source.name
      };
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
      return null;
    }
  });

  const prices = await Promise.all(pricePromises);
  return prices.filter((price): price is PriceData => price !== null);
};

const write = async () => {
  try {
    const symbols = ['SOLUSDT', 'BTCUSDT'];
    
    for (const symbol of symbols) {
      const prices = await fetchPricesFromAllSources(symbol);
      const consensusPrice = findConsensusPrice(prices);
      
      console.log(`
Timestamp: ${new Date().toISOString()}
Symbol: ${symbol}
${prices.map(p => `${p.source}: $${parseFloat(p.price).toFixed(2)}`).join('\n')}
Consensus Price: ${consensusPrice ? `$${consensusPrice.toFixed(2)}` : 'No consensus reached'}
-----------------`);
    }
  } catch (error) {
    console.error('Error fetching prices:', error);
  }
};

const run = async () => {
  const interval = (
    Number.parseInt(process.env.INTERVAL ?? '', 10) ||
    Number.parseInt(process.argv[2], 10) ||
    15  // Changed default to 15 seconds to avoid rate limiting
  ) * 1000;
  
  setTimeout(() => write(), 0);
  setInterval(() => write(), interval);
}

run().catch(e => {
  console.error('Error', e);
  process.exit(1);
})
