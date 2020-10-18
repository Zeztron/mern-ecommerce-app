import { Router, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { NotFoundError } from '../errors/notFoundError';
import { Product } from '../models/productModel';

const router = Router();

/**
 * @desc    Fetch all products
 * @route   GET /api/products
 * @access  Public
 * */ 
router.get('/', asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find({});
  res.json(products);
}));

/**
 * @desc    Fetch single products
 * @route   GET /api/products/:id
 * @access  Public
 * */ 
router.get('/:id', asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  };

  res.json(product);

}));

export { router as productRouter };