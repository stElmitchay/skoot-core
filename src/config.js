import dotenv from 'dotenv';
import { PublicKey } from '@solana/web3.js';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const SOLANA_NETWORK = process.env.SOLANA_NETWORK || 'devnet';
export const USDC_MINT_ADDRESS = new PublicKey(process.env.USDC_MINT_ADDRESS);