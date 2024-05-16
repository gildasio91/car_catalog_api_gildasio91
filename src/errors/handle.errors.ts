import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ApiError } from "./api.errors";
import { JsonWebTokenError } from "jsonwebtoken";
import { status } from "../utils/HttpStatusCode";

export const handleError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof ZodError) {
    console.log({ errors: error.flatten().fieldErrors });
    return res.status(400).json({ errors: error.flatten().fieldErrors });
  }

  if (error instanceof JsonWebTokenError) {
    return res
      .status(status.HTTP_401_UNAUTHORIZED)
      .json({ message: error.message });
  }

  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  return res.status(500).json({ error });
};
