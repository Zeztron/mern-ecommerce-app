import { CustomError } from './customError';

export class NotAuthorizedError extends CustomError {
  statusCode: number = 401;

  constructor() {
    super('Not Authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  };

  serializeErrors() {
    return [{ message: 'Not Authorized' }];
  };
};