import { prisma } from "../../../../prisma/database"; 

beforeEach(async () => {
    await prisma.$transaction([prisma.car.deleteMany()]);
  });
