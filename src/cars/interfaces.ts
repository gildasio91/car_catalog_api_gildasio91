import { z } from "zod";
import { carPayloadSchema, carSchema } from "./schemas";

type TCar = z.infer<typeof carSchema>;

type TCarPayload = z.infer<typeof carPayloadSchema>;

export { TCar, TCarPayload };
