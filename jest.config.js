module.exports = {
  preset: 'jest-expo',
  automock: false,
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
  ],
  setupFilesAfterEnv: ['/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{tsx|ts}', '!src/**/*.{d.ts,spec.tsx}'],
  coverageReporters: ['lcov', 'json'],
  setupFilesAfterEnv: [],
};
