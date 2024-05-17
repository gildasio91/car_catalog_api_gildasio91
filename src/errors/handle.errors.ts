import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ApiError } from "./api.errors";


export const handleError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof ZodError) {
   
    return res.status(400).json({ errors: error.flatten().fieldErrors });
  }

  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  return res.status(500).json({ error });
};
