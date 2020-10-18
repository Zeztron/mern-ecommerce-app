import express, { Application } from 'express';
import { productRouter } from './routes/productRoutes';

const app: Application = express();

app.use('/api/products', productRouter);

export { app };