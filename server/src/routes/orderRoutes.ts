import { Router } from 'express';
import { addOrderItems } from '../controllers/orderController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.route('/').post(protect, addOrderItems);

export { router as orderRouter }