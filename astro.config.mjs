import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://doxiepupscreek.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
