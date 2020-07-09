module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest', // ts-jest does not support preval.macro
  },
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  modulePathIgnorePatterns: ['<rootDir>/src/attributes.ts'],
  collectCoverage: true,
};
