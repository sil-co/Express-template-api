import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(cors()); // same `app.use(cors({ origin: '*' }));`
app.use(express.json());
app.use('/api/items', itemRoutes);
app.use(errorHandler);

export default app;
