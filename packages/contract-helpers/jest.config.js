module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: ["./src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: ["src/typechain/**/*.ts"],
  modulePathIgnorePatterns: ["node_modules"],
  testEnvironment: "node",
  verbose: true,
};
