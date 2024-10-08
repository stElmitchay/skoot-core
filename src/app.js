//@ts-check

import express from 'express';
import { transferUsdcAction } from './actions/transferUsdcAction.js';
import { PORT } from './config.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use("*", cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/actions.json', (req, res) => {
  res.json({
    "rules": [
      {
        "pathPattern": "/**",
        "apiPath": "/**"
      }
    ]
  });
});

app.get('/api/actions/transfer-usdc', (req, res) => {
  const metadata = transferUsdcAction.getMetadata();
  res.json(metadata);
});

app.post('/api/actions/transfer-usdc', async (req, res) => {
  console.log(req.body);
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