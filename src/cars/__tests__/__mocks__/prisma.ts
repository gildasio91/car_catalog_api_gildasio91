import { mockDeep , DeepMockProxy, mockReset} from 'jest-mock-extended';
import { PrismaClient } from "@prisma/client";
import { prisma } from '../../../../prisma/database';



jest.mock("../../../../prisma/database", () => ({
  __esModule: true,
  prisma: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
  mockReset(prisma);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
