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
  handle: async ({ account:senderPublicKey }) => {
    console.log('senderPublicKey', senderPublicKey);
    if (!senderPublicKey) {
      throw new Error('Missing required parameters');
    }

    const balance = await checkUsdcBalance(senderPublicKey);
    console.log('balance', balance);
    if (balance <= 2) {
      throw new Error('Not enough USDC for transaction');
    }

    const recipientAddress = "291T1GQE8WJ6zp6aoQkzTKjje9AL2SGohNPTH46BsGtJ";

    const transaction = await prepareUsdcTransfer(senderPublicKey, recipientAddress, 1);
;

    return {
      transaction,
      message: `Scoot without fear!`,
    };
  },
  getMetadata: () => ({
    type: "action",
    icon: "https://img.freepik.com/free-vector/cute-astronaut-riding-scooter-cartoon-vector-icon-illustration-science-transportation-isolated_138676-6918.jpg?t=st=1725892671~exp=1725896271~hmac=28017f518d4d0a77dbd2f14997e140f66bf85afd065c2b3d1bf9a2aa3575a91d&w=1380",
    title: "Skoot Coin",
    description: "Touch the Sign Button",
    label: "Scoot Around"
  })
};