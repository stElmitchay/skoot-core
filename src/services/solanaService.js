import {
    Connection,
    PublicKey,
    Transaction,
    clusterApiUrl,
  } from '@solana/web3.js';
  import {
    createTransferCheckedInstruction,
    getAssociatedTokenAddress,
    getAccount,
  } from '@solana/spl-token';
  import { SOLANA_NETWORK, USDC_MINT_ADDRESS } from '../config.js';
  
  const connection = new Connection(clusterApiUrl(SOLANA_NETWORK), 'confirmed');
  
  export async function checkUsdcBalance(publicKey) {
    const senderPubkey = new PublicKey(publicKey);
    const senderTokenAccount = await getAssociatedTokenAddress(USDC_MINT_ADDRESS, senderPubkey);
    const accountInfo = await getAccount(connection, senderTokenAccount);
    return Number(accountInfo.amount) / Math.pow(10, 6);
  }
  
  export async function prepareUsdcTransfer(senderPublicKey, recipientAddress, amount) {
    const senderPubkey = new PublicKey(senderPublicKey);
    const recipientPubkey = new PublicKey(recipientAddress);
  
    const senderTokenAccount = await getAssociatedTokenAddress(USDC_MINT_ADDRESS, senderPubkey);
    const recipientTokenAccount = await getAssociatedTokenAddress(USDC_MINT_ADDRESS, recipientPubkey);
  
    const transferAmount = amount * Math.pow(10, 6); // Convert to USDC's smallest unit
    const transferInstruction = createTransferCheckedInstruction(
      senderTokenAccount,
      USDC_MINT_ADDRESS,
      recipientTokenAccount,
      senderPubkey,
      transferAmount,
      6,
    );
  
    const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
    const transaction = new Transaction({
      feePayer: senderPubkey,
      blockhash,
      lastValidBlockHeight,
    }).add(transferInstruction);
  
    return transaction.serialize({ requireAllSignatures: false }).toString('base64');
  }