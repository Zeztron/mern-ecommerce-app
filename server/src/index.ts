import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

import products from './data/products';

dotenv.config();

const app: Application = express();

app.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

app.get('/api/products/:id', (req: Request, res: Response) => {
  const product = products.find(product => product._id === req.params.id);
  res.json(product);
})

app.listen(process.env.PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`));