import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.hillsidepaws.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
