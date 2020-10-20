import { RequestHandler, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Product } from '../models/productModel';

/**
 * @desc    Fetch all products
 * @route   GET /api/products
 * @access  Public
 * */ 
const getProducts: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find({});
  res.json(products);
});

/**
 * @desc    Fetch single products
 * @route   GET /api/products/:id
 * @access  Public
 * */ 
const getProductById: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  };

  res.json(product);
});

export { getProducts, getProductById };