import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        blog: resolve(__dirname, 'blog.html'),
        career: resolve(__dirname, 'career.html'),
        contact: resolve(__dirname, 'contact.html'),
        industries: resolve(__dirname, 'industries.html'),
        services: resolve(__dirname, 'services.html'),
      },
    },
  },
});
