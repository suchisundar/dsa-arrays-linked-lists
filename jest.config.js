module.exports = {
    testEnvironment: 'node', // Use Node.js environment for testing
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$', // Look for test files with .test.js or .spec.js extension
    coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'], // Ignore coverage for node_modules and test files
    collectCoverage: true, // Enable code coverage reporting
    coverageReporters: ['text', 'lcov'], // Report coverage in text format and generate lcov report
  };
  