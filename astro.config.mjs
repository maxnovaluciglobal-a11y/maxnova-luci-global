// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maxnova-luci-global.vercel.app',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
});
