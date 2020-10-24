import { RequestHandler, Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/notAuthorizedError';

export const requireAuth: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) throw new NotAuthorizedError();

  next();
};