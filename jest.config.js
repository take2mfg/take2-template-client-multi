const isVisualRegression = !!(process.env.VIZ_REG);

const testPathIgnorePatterns = isVisualRegression ? ['node_modules'] : [
  '/node_modules/',
  '/stories.spec.tsx',
  '/stories.spec.js',
];

const testRegex = isVisualRegression ? '(/__tests__/.*|(.|/)(stories.)(test|spec)).js?$' : '(/__tests__/.*|(.|/)(test|spec)).js?$';

module.exports = {
  roots: ['<rootDir>/apps'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex,
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  reporters: ['jest-spec-reporter', 'jest-junit'],
  globalSetup: '<rootDir>test/globalSetup.js',
  setupTestFrameworkScriptFile: '<rootDir>test/testSetup.js',
  testPathIgnorePatterns,
};
