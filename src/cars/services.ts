import { prisma } from "./../../prisma/database";
import { TCar, TCarPayload } from "./interfaces";

export const createCarService = async (payload: TCarPayload): Promise<TCar> => {
  const newCar = await prisma.car.create({ data: payload });

  return newCar;
};

export const listCarsService = async (): Promise<TCar[]> => {
  return await prisma.car.findMany();
};
