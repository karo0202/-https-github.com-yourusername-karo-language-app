import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/karo-language-app/', // Set base for GitHub Pages
  plugins: [react()],
}); 