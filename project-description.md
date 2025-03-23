### NCN DeFi Price Oracle

A decentralized, real-time price oracle powered by NCN & Cambrian SDK for secure DeFi applications.

- **GitHub Repository:** [https://github.com/jayshreeanand/oracle-price-feed](https://github.com/jayshreeanand/oracle-price-feed)

A decentralized, real-time cryptocurrency price feed oracle that fetches & verifies market prices from multiple trusted sources. Built on Cambrian’s NCN, it ensures reliable, tamper-resistant price updates for DeFi applications on Solana.

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

#### Use Cases:

- **DEXs & AMMs** – Reliable on-chain prices for swaps & limit orders.
- **Lending Platforms** – Accurate collateral pricing for borrowing/lending decisions.
- **Perpetual & Derivatives Trading** – Real-time feeds for margin trading platforms.
- **Algorithmic Stablecoins** – Trusted price inputs for peg maintenance.

#### Tech Stack:

- **Cambrian SDK (NCN)** – Decentralized consensus for price verification.
- **Binance API / CoinGecko / KuCoin / Gate.io** – Off-chain price sources.
- **Node.js / TypeScript** – Backend for fetching and processing data.

#### Why This Matters?

Current oracles like Chainlink charge high fees, while centralized APIs introduce risks of **manipulation and single points of failure**. This project provides an **affordable, decentralized, and developer-friendly alternative** with verifiable price accuracy through NCN.

## Screenshots

Oracle test output:

<img width="1025" alt="Screenshot 2025-03-24 at 1 28 54 AM" src="https://github.com/user-attachments/assets/79f9aabd-c7e1-4c8d-91e1-50754a0f245e" />

AVS Scaffold:

<img width="1645" alt="Screenshot 2025-03-24 at 12 14 07 AM" src="https://github.com/user-attachments/assets/4a974445-4f8f-481c-8c00-73e4d9eee511" />

Run AVS
<img width="1383" alt="Screenshot 2025-03-24 at 12 16 43 AM" src="https://github.com/user-attachments/assets/63637cd1-7860-4d40-a1c8-986a137748ed" />

Scaffold Operator 1

<img width="1648" alt="Screenshot 2025-03-24 at 12 19 00 AM" src="https://github.com/user-attachments/assets/61218d0e-314f-49cf-a093-821a983a39ab" />

Scaffold Operator 2

<img width="1205" alt="Screenshot 2025-03-24 at 12 21 50 AM" src="https://github.com/user-attachments/assets/0a247f84-46b0-4c98-a387-41d9f85885bf" />

Scaffold Operator 3
<img width="1642" alt="Screenshot 2025-03-24 at 12 21 58 AM" src="https://github.com/user-attachments/assets/094a7ce5-72eb-4e4d-b241-5bfab6c7c752" />

Operators Connected
<img width="1192" alt="Screenshot 2025-03-24 at 12 24 52 AM" src="https://github.com/user-attachments/assets/96b41408-a529-47dc-a68e-234831d8c9b5" />

NCN output

<img width="822" alt="Screenshot 2025-03-24 at 12 28 25 AM" src="https://github.com/user-attachments/assets/b83d2bff-522f-413e-932c-ea02bdfcfe8c" />
