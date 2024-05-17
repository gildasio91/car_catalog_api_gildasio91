import { carExists, isBodyValid } from './middlewares';
import { createCarController, deleteCarController, listCarController, partialUpdateCarController, retrieveCarController } from './controllers';
import { Router } from "express";
import { carPayloadSchema } from './schemas';



export const carRouter = Router();

carRouter.post("", isBodyValid(carPayloadSchema), createCarController);

carRouter.get("", listCarController);

carRouter.use("/:id", carExists);

carRouter.get("/:id", retrieveCarController);

carRouter.patch("/:id", partialUpdateCarController);

carRouter.delete("/:id", deleteCarController);
