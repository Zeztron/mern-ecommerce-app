import { RequestHandler, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { BadRequestError } from '../errors/badRequestError';
import { Order } from '../models/orderModel';

/**
 * @desc    Create new order
 * @route   GET /api/orders
 * @access  Private
 * */ 
const addOrderItems: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    throw new BadRequestError('No order items');
  }

  const order = new Order({
    user: req.user?._id, 
    orderItems, 
    shippingAddress, 
    paymentMethod, 
    itemsPrice, 
    taxPrice, 
    shippingPrice, 
    totalPrice
  });

  const createdOrder = await order.save();

  res.status(201).json(createdOrder);

});

export { addOrderItems };
