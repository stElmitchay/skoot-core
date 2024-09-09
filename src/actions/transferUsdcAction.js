import { checkUsdcBalance, prepareUsdcTransfer } from '../services/solanaService.js';
import bs58 from 'bs58';

export const transferUsdcAction = {
  id: 'transfer-usdc',
  name: 'Transfer USDC',
  description: 'Transfer 1 USDC to a recipient',
  version: '1.0.0',
  schema: {
    type: 'object',
    properties: {
      senderPublicKey: {
        type: 'string',
        description: 'Public key of the sender',
      },
      recipientAddress: {
        type: 'string',
        description: 'Address of the recipient',
      },
    },
    required: ['senderPublicKey', 'recipientAddress'],
  },
  handle: async ({ senderPublicKey, recipientAddress }) => {
    if (!senderPublicKey || !recipientAddress) {
      throw new Error('Missing required parameters');
    }

    const balance = await checkUsdcBalance(senderPublicKey);
    
    if (balance <= 2) {
      throw new Error('Not enough USDC for transaction');
    }

    const serializedTransaction = await prepareUsdcTransfer(senderPublicKey, recipientAddress, 1);
    const transaction = bs58.encode(Buffer.from(serializedTransaction, 'base64'));

    return {
      transaction,
      message: `Transfer 1 USDC from ${senderPublicKey} to ${recipientAddress}`,
    };
  },
  getMetadata: () => ({
    type: "action",
    icon: "https://example.com/usdc-transfer-icon.png",
    title: "USDC Transfer",
    description: "Transfer 1 USDC to a recipient",
    label: "Transfer USDC",
    disabled: false,
    links: {
      actions: []
    }
  })
};