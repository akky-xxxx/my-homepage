module.exports = {
  testMatch: ["**/__tests__/it/*.ts?(x)"],
  setupFilesAfterEnv: [
    "jest-enzyme",
  ],
  testEnvironment: "enzyme",
}
