// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';
// @ts-ignore
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
    },
    output: 'server',
    adapter: netlify({
      edgeMiddleware: true
    }),
});