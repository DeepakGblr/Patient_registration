import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@electric-sql/pglite'],
  },
  build: {
    rollupOptions: {
      external: [
        '/pglite-assets/pglite.wasm',
        '/pglite-assets/pglite.data',
        '/pglite-assets/pglite.js',
      ],
    },
  },
});
