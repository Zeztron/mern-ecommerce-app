import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { User, UserDoc } from '../models/userModel';
import { NotAuthorizedError } from '../errors/notAuthorizedError';

interface UserPayload {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      user: UserDoc | null;
    }
  }
}

const protect: RequestHandler = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

  if (!req.headers.authorization) return next();

  const token: string = req.headers.authorization.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
    req.user = await User.findById(payload.id).select('-password');
  } catch (error) {
    throw new NotAuthorizedError();
  };

  next();

});

export { protect };