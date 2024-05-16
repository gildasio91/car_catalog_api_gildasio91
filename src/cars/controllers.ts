import { Request, Response } from "express";
import { createCarService, listCarsService } from "./services";

export const createCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const createdCar = await createCarService({ ...req.body });

  return res.status(201).json(createdCar);
};

export const listCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listCar = await listCarsService();

  return res.status(201).json(listCar);
};
