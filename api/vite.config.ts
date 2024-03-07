import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: './index.ts', // Asegúrate de tener la ruta correcta
    },
  },
  server: {
    open: true,
    proxy: {
      '/api': 'http://localhost:3000', // Reemplaza con el puerto del servidor Node.js
    },
  }
});