import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { site } from './site.config.mjs';
import { markdownNames } from './src/lib/names.mjs';
import { securityHeaders } from './src/lib/headers.mjs';

export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Every style and script is a file of its own, so the Content-Security-Policy needs no
    // 'unsafe-inline' (see src/lib/headers.mjs).
    inlineStylesheets: 'never',
  },
  vite: { build: { assetsInlineLimit: 0 } },
  markdown: {
    processor: satteri({ mdastPlugins: [markdownNames] }),
    // Prism marks code with classes; Shiki would write inline styles, which the policy forbids.
    syntaxHighlight: 'prism',
  },
  integrations: [
    sitemap({ filter: (page) => !/\/(search|404)\/$/.test(page) }),
    securityHeaders(),
  ],
  devToolbar: { enabled: false },
});
