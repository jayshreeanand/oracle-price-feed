interface PriceData {
  symbol: string;
  price: string;
}

const fetchPrice = async (symbol: string): Promise<number> => {
  try {
    const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
    const data: PriceData = await response.json();
    return parseFloat(data.price);
  } catch (error) {
    console.error(`Error fetching price for ${symbol}:`, error);
    throw error;
  }
}

const write = async () => {
  try {
    const solPrice = await fetchPrice('SOLUSDT');
    const btcPrice = await fetchPrice('BTCUSDT');
    console.log(`
      Timestamp: ${new Date().toISOString()}
      SOL/USDT: $${solPrice.toFixed(2)}
      BTC/USDT: $${btcPrice.toFixed(2)}
    `);
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
