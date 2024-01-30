import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      all: true,
      reporter: ['lcov', 'text'],
    },
    environment: 'jsdom',
    globals: true,
    reporters: ['default', 'junit'],
    outputFile: 'junit.xml',
    setupFiles: ['./src/setupTests.ts'],
  },
});
