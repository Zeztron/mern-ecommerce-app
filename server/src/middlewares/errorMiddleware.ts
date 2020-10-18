import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/customError';
import { NotFoundError } from '../errors/notFoundError';

const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new NotFoundError(`Not Found - ${req.originalUrl}`);
  next(error);
};

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

export { notFound, errorMiddleware };
 
