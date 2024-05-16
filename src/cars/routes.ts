import { isBodyValid } from './middlewares';
import { createCarController, listCarController } from './controllers';
import { Router } from "express";
import { carPayloadSchema } from './schemas';


export const carRouter = Router();

carRouter.post("", isBodyValid(carPayloadSchema), createCarController);

carRouter.get("", listCarController);

carRouter.get("/:id", );

carRouter.patch("/:id", );

carRouter.delete("/:id", );
