import express from 'express';
import helmet from 'helmet';
import transferController from './controllers/transferController.js';
import errorHandler from './utils/errorHandler.js';
import { PORT } from './config.js';

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/api/actions', transferController);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;