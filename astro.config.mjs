import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dapperdoxiepups.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
