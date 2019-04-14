module.exports = {
  browser: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}'
  ],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  verbose: true
}
