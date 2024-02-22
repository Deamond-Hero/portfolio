import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true,
    proxy: {
      '/api': 'http://localhost:3000', // Reemplaza con el puerto del servidor Node.js
    },
  },
});