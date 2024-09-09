import express from 'express';
import { transferUsdcAction } from './actions/transferUsdcAction.js';
import { PORT } from './config.js';

const app = express();
app.use(express.json());

app.get('/api/actions/transfer-usdc', (req, res) => {
  const metadata = transferUsdcAction.getMetadata();
  res.json(metadata);
});

app.post('/api/actions/transfer-usdc', async (req, res) => {
  try {
    const result = await transferUsdcAction.handle(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: 'Invalid Address' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;