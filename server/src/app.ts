import express, { Application } from 'express';

// Routes
import { productRouter } from './routes/productRoutes';

// Middlewares
import { errorMiddleware, notFound } from './middlewares/errorMiddleware';

// Errors
import { NotFoundError } from './errors/notFoundError';

const app: Application = express();

// Implementing Routes
app.use('/api/products', productRouter);

// Implementing Middlewares
app.use(errorMiddleware);
app.use(notFound);

export { app };