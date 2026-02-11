import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.criaderocastellano.es',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
