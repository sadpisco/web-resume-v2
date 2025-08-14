// @ts-check
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { i18n } from "astro-i18n-aut/integration";
import { defineConfig } from 'astro/config';

const defaultLocale = "en";
const locales = {
  en: "en-US",
  es: "es-ES",
};
const isProd = process.env.NODE_ENV === 'production';
// https://astro.build/config
export default defineConfig({
  site: "https://leorisco.dev",
  trailingSlash: "never",
  build: {
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src', // '@' apunta a la carpeta src
        ...(isProd ? { 'react-dom/server': 'react-dom/server.edge' } : {})
      },
    },
  },
  adapter: cloudflare({
    cloudflareModules: true,
    imageService: 'compile'
  }),
  integrations: [
    i18n({ locales, defaultLocale }),
    react(),
  ]
});