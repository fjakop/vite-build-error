import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      all: true,
      reporter: ['lcov', 'text'],
      src: ['./src'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
  },
});
