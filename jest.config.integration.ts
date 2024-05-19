/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/integrations/**/*.[jt]s?(x)"],
    setupFilesAfterEnv: ["./src/cars/__tests__/utils/clearDatabase.ts"]
  };
  