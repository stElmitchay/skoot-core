import { checkUsdcBalance, prepareUsdcTransfer } from '../services/solanaService.js';
import bs58 from 'bs58';

export const transferUsdcAction = {
  id: 'transfer-usdc',
  name: 'Let me Scoot',
  description: 'Scoot Around',
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
    icon: "https://www.freepik.com/free-vector/cute-astronaut-riding-scooter-cartoon-vector-icon-illustration-science-transportation-isolated_36073177.htm#query=scooter%20logo&position=1&from_view=keyword&track=ais_hybrid&uuid=f855ddca-a2ed-4015-be1e-0601b6aae681",
    title: "Skoot Coin",
    description: "Touch the Sign Button",
    label: "Scoot Around",
    disabled: false,
    links: {
      actions: []
    }
  })
};