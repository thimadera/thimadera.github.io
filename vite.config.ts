import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// base: './' makes the build work on GitHub Pages subpaths
// (e.g. https://<user>.github.io/portfolio-thiago/).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
});
