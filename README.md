# Skoot-Skoot Solana Action API

## Overview

Skoot-Skoot is a platform that leverages blockchain technology to revolutionize the electric scooter sharing economy. This repository contains the Solana action API for Skoot-Skoot, which handles USDC payments on the Solana blockchain.

## Solana Action API

This API implements a Solana action for transferring USDC tokens. It provides the following functionality:

- Checks the sender's USDC balance
- Prepares a transaction to transfer 1 USDC if the balance is sufficient
- Returns a serialized transaction ready for signing by a Solana wallet

## Key Features

- Balance checking before transaction preparation
- Secure transaction preparation using Solana web3.js and SPL token libraries
- RESTful API endpoint for easy integration with front-end applications

## Setup and Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file based on `.env.example` and fill in the required values
4. Run `npm start` to start the server
5. Use `npm test` to run the test suite

## API Endpoint

POST /api/actions/transfer-usdc
- Request body: { "senderPublicKey": "...", "recipientAddress": "..." }
- Response: { "serializedTransaction": "...", "message": "..." }

## Technologies Used

- Node.js
- Express.js
- @solana/web3.js
- @solana/spl-token


For more information about Skoot-Skoot, please contact https://x.com/ayorinde270
