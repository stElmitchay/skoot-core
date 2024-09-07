import { Router } from 'express';
import { checkUsdcBalance, prepareUsdcTransfer } from '../services/solanaService.js';

const router = Router();

router.post('/transfer-usdc', async (req, res, next) => {
  try {
    const { senderPublicKey, recipientAddress } = req.body;

    if (!senderPublicKey || !recipientAddress) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const balance = await checkUsdcBalance(senderPublicKey);
    
    if (balance <= 2) {
      return res.status(400).json({ error: 'Not enough USDC for transaction' });
    }

    const serializedTransaction = await prepareUsdcTransfer(senderPublicKey, recipientAddress, 1);

    res.json({
      serializedTransaction,
      message: `Transfer 1 USDC from ${senderPublicKey} to ${recipientAddress}`,
    });
  } catch (error) {
    next(error);
  }
});

export default router;