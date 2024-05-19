/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/__tests__/units/**/*.[jt]s?(x)"],
  setupFilesAfterEnv: ["./src/cars/__tests__/__mocks__/prisma.ts"]
};