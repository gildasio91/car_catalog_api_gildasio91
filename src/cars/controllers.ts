import { Request, Response } from "express";
import { createCarService, deleteCarService, listCarsService, partialUpdateCarService, retrieveCarService } from "./services";
import { status } from "../utils/HttpStatusCode";

export const createCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await createCarService({ ...req.body });

  return res.status(201).json(response);
};

export const listCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await listCarsService();

  return res.status(status.HTTP_200_OK).json(response);
};

export const retrieveCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
 const response = await retrieveCarService(req.params.id)

 return res.status(status.HTTP_200_OK).json(response);
};

export const partialUpdateCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
 const response = await partialUpdateCarService(req.params.id, req.body);

 return res.status(status.HTTP_200_OK).json(response);
};

export const deleteCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
 await deleteCarService(req.params.id);

 return res.status(status.HTTP_204_NO_CONTENT).json();
};
