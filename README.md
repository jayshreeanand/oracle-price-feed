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

# Error Handling

The service includes basic error handling for:

- API connection issues
- Invalid response data
- Network timeouts

Errors are logged to the console with relevant details.
