import { Router } from 'express';
import { authUser } from '../controllers/userController';

const router = Router();

router.post('/login', authUser);

export { router as userRouter };