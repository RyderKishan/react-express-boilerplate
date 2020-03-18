module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  roots: ['src'],
  // roots: ['src', 'api'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/operations.js',
    '!**/selectors.js',
    '!**/constants.js',
    '!**/styles.js',
    '!**/src/index.jsx',
  ],
  setupFilesAfterEnv: ['<rootDir>config/enzyme.setup.js'],
};
