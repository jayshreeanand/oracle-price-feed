# DeFi Price Oracle

A simple real-time cryptocurrency price oracle that fetches prices from Binance's public API. This service provides current market prices for various cryptocurrency pairs including SOL/USDT and BTC/USDT.

## Features

- Real-time price updates from Binance
- Configurable update intervals
- Support for multiple trading pairs
- Timestamp for each price update
- Error handling and logging

## NCN Setup

For NCN setup using Cambrian SDK, please follow instructions here https://cambrian-one.notion.site/Cambrian-CLI-19f53efb9c8580fd8606f3ff89c6ddd2#19f53efb9c8580a8ba7ac9ae44e486d0

## Price Oracle Configuration

The service can be configured using either environment variables or command-line arguments:

- `INTERVAL`: Update interval in seconds (default: 15)
- Command-line argument: First argument is taken as interval in seconds

## Example Output

Timestamp: 2024-03-14T10:30:00.000Z
SOL/USDT: $147.25
BTC/USDT: $71234.50

## Error Handling

The service includes basic error handling for:

- API connection issues
- Invalid response data
- Network timeouts

Errors are logged to the console with relevant details.

## Screenshots

Oracle test output:

<img width="808" alt="Screenshot 2025-03-24 at 12 01 54 AM" src="https://github.com/user-attachments/assets/97df7128-345e-42be-bf7c-cc3bf6461300" />

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







