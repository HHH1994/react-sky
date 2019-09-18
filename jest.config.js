module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    // '^.+\\.css$': '<rootDir>/__test__/css-transform.js',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/']
};