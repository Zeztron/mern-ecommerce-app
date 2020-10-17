import express, { Application, Request, Response } from 'express';
import products from './data/products';

const app: Application = express();

app.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

app.get('/api/products/:id', (req: Request, res: Response) => {
  const product = products.find(product => product._id === req.params.id);
  res.json(product);
})

export { app };