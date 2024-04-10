/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
import favicon from 'favicon';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint()],
  css: {
    postcss: {
      plugins: [
        autoprefixer(), favicon(), tailwindcss(),
      ],
    },
  },
});
