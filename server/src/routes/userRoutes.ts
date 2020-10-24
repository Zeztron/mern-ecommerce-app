import { Router } from 'express';
import { authUser, getUserProfile, registerUser } from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', registerUser)
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export { router as userRouter };