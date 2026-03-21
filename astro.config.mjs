// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ronxav11.github.io',
  base: '/QuillMop',
  vite: {
    plugins: [tailwindcss()]
  }
});