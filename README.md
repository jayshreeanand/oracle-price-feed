### NCN DeFi Price Oracle

A decentralized, real-time price oracle powered by NCN & Cambrian SDK for secure DeFi applications.

- **GitHub Repository:** [https://github.com/jayshreeanand/oracle-price-feed](https://github.com/jayshreeanand/oracle-price-feed)

#### Project Description:

The **NCN DeFi Price Oracle** is a decentralized, real-time cryptocurrency price feed that fetches and verifies market prices from multiple trusted sources, including **Binance, CoinGecko, KuCoin, and Gate.io**. Built on **Cambrian’s Node Consensus Network (NCN)**, it ensures reliable, tamper-resistant price updates for DeFi applications on Solana.

This oracle provides **high-frequency, on-chain price updates** with built-in verification mechanisms to enhance security and reduce manipulation risks. Designed for **DEXs, lending protocols, and automated trading systems**, it enables trustless financial interactions in the Web3 ecosystem.

### How it Works

- Real-time price aggregation from multiple trusted sources:
  - CoinGecko
  - Binance
  - KuCoin
  - Gate.io
- Consensus mechanism requiring 3+ sources to agree
- 2% maximum deviation threshold for price validation
- Detailed price reporting with source attribution
- Configurable update intervals
- Robust error handling and fallback mechanisms

#### Key Features:

- **Decentralized Price Feeds** – Aggregates prices from Binance, CoinGecko, KuCoin, and Gate.io for accurate market data.
- **Consensus-Based Verification** – Uses **Node Consensus Networks (NCN)** to validate price integrity before publishing.
- **Real-Time Updates** – Configurable interval for fetching and updating prices.
- **Multi-Pair Support** – Supports **SOL/USDT, BTC/USDT**, and can be extended to other tokens.
- **Consensus Threshold Mechanism** – Prices are validated based on a 2% consensus threshold, filtering out anomalies.
- **Error Handling & Logging** – Built-in safeguards for API failures and network issues.
- **Solana Integration** – Designed to be consumed by DeFi smart contracts for lending, swaps, and derivatives.

## NCN Setup

For NCN setup using Cambrian SDK, please follow instructions here https://cambrian-one.notion.site/Cambrian-CLI-19f53efb9c8580fd8606f3ff89c6ddd2#19f53efb9c8580a8ba7ac9ae44e486d0

## Price Oracle Configuration

The service can be configured using either environment variables or command-line arguments:

- `INTERVAL`: Update interval in seconds (default: 15)
- Command-line argument: First argument is taken as interval in seconds

## Example Output

Timestamp: 2025-03-23T20:01:15.720Z

Symbol: SOLUSDT

CoinGecko: $130.56

Binance: $130.60

Kucoin: $130.59

Gate.io: $130.63

Consensus Price: $130.59

---

## Error Handling

The service includes basic error handling for:

- API connection issues
- Invalid response data
- Network timeouts

Errors are logged to the console with relevant details.

## Screenshots

Oracle test output:

<img width="1025" alt="Screenshot 2025-03-24 at 1 28 54 AM" src="https://github.com/user-attachments/assets/79f9aabd-c7e1-4c8d-91e1-50754a0f245e" />

AVS Scaffold:

<img width="1632" alt="Screenshot 2025-03-24 at 2 02 03 AM" src="https://github.com/user-attachments/assets/ea362686-975d-461b-ace6-ed7918ebd4a1" />

Run AVS

<img width="1017" alt="Screenshot 2025-03-24 at 2 03 36 AM" src="https://github.com/user-attachments/assets/14c56d78-b838-4238-83ae-85de8376b5a0" />

Scaffold Operator 1

<img width="1645" alt="Screenshot 2025-03-24 at 2 05 01 AM" src="https://github.com/user-attachments/assets/6dd3e6fd-8144-433c-a7ca-9d68f5ab15d8" />

Scaffold Operator 2

<img width="1652" alt="Screenshot 2025-03-24 at 2 06 12 AM" src="https://github.com/user-attachments/assets/004bc501-7c4e-48ed-a36f-5336b8f5842f" />

Scaffold Operator 3

<img width="1638" alt="Screenshot 2025-03-24 at 2 07 03 AM" src="https://github.com/user-attachments/assets/94580297-76d6-42b2-81cc-706bf5134c95" />

Operators Connected

<img width="1014" alt="Screenshot 2025-03-24 at 2 08 37 AM" src="https://github.com/user-attachments/assets/44023dcf-2709-4426-a905-f3df40b65b5e" />

NCN output

![output](https://res.cloudinary.com/dlgztvq9v/image/upload/cambrian/Screenshot_2025-03-24_at_12.28.25_AM_k1posr.png)
