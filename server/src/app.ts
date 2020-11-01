import express, { Application } from 'express';
import { json } from 'body-parser';

// Routes
import { productRouter } from './routes/productRoutes';
import { userRouter } from './routes/userRoutes';
import { orderRouter } from './routes/orderRoutes';

// Middlewares
import { errorMiddleware, notFound } from './middlewares/errorMiddleware';

const app: Application = express();
app.use(json());

// Implementing Routes
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

// Implementing Middlewares
app.use(errorMiddleware);
app.use(notFound);

export { app };