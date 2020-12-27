module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@@/(.*)$": "<rootDir>/src/$1",
  },
  coveragePathIgnorePatterns: [
    "node_modules",
    "./src/shared/const",
    "./src/shared/types",
  ],
}
