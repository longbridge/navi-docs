import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import naviGrammar from './navi.tmLanguage.json' with { type: 'json' };

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      langs: [{ ...naviGrammar, name: 'navi' }],
      langAlias: { pine: 'navi', nv: 'navi' },
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
