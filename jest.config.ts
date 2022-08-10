import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  clearMocks: true,
  resetModules: true,
  collectCoverage: true,
  coverageReporters: ['html'],
  collectCoverageFrom: [
    '**/src/*.{ts,tsx}',
    '!webpack.config.js',
    '!.storybook/**',
    '!**/*.d.ts',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/__fixtures__/',
    '/coverage/',
    '/__tests__/',
    '/__stories__/',
    '/(__)?mock(s__)?/',
    '/__jest__/',
    '.?.min.js',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/files.ts',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styles.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/src/utils/setupTests.ts'],
}
export default config
