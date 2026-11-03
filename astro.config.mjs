// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maxnovaluci.com',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
});
