// @ts-check
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src', // '@' apunta a la carpeta src
      },
    },
  },
  adapter: cloudflare({
    cloudflareModules: true,
    imageService: 'compile'
  })
});