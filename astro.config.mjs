import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dapperdoxie.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
