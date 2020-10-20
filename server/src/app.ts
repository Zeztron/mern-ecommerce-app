import express, { Application } from 'express';
import { json } from 'body-parser';

// Routes
import { productRouter } from './routes/productRoutes';
import { userRouter } from './routes/userRoutes';

// Middlewares
import { errorMiddleware, notFound } from './middlewares/errorMiddleware';

const app: Application = express();
app.use(json());

// Implementing Routes
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

// Implementing Middlewares
app.use(errorMiddleware);
app.use(notFound);

export { app };