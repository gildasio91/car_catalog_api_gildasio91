import { prisma } from "./../../prisma/database";
import { TCar, TCarPayload } from "./interfaces";
import { carSchema } from "./schemas";

export const createCarService = async (payload: TCarPayload): Promise<TCar> => {
  const newCar = await prisma.car.create({ data: payload });

  return carSchema.parse(newCar);
};

export const listCarsService = async (): Promise<TCar[]> => {
  return carSchema.array().parse(await prisma.car.findMany());
};

export const retrieveCarService = async (id: string): Promise<TCar> => {
  const car = await prisma.car.findUnique({ where: { id } });

  return carSchema.parse(car!);
};

export const partialUpdateCarService = async (id: string, payload: Partial<TCarPayload>): Promise<TCar> => {
  const car = await prisma.car.findUnique({ where: { id } });

  const updatedCar = {...car, ...payload};

  return carSchema.parse(updatedCar);
}

export const deleteCarService = async (id: string) => {
  return await prisma.car.delete({ where: { id } });
};