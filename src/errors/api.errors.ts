export class ApiError extends Error {
    constructor( public statusCode: number = 500, public message: string) {
      super(message);
    }
  }
  