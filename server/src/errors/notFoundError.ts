import { CustomError } from './customError';

export class NotFoundError extends CustomError {
  statusCode: number = 404;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  };

  serializeErrors() {
    return [{ message: this.message}];
  };
};