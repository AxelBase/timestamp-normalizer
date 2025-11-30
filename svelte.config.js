// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html',
      precompress: false
    }),
    paths: {
      base: '/timestamp-normalizer'
    },
    prerender: {
      entries: ['*', '/sitemap-new.xml'],
      handleHttpError: 'warn',
      handleMissingId: () => {}
    }
  }
};

export default config;