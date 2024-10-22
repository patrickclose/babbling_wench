import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        aesthetics: 'aesthetics/index.html',
        garbage: 'garbage/index.html',
        lifestyle: 'lifestyle/index.html',
        whatever: 'whatever/index.html',
      },
    },
  },
});
