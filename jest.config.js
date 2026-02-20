module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!node_modules/**',
    '!**/tests/**'
  ],
  coverageThreshold: {
    global: {
      branches: 91,
      functions: 98,
      lines: 98,
      statements: 98
    }
  }
};
