import { createFromSource } from 'fumadocs-core/search/server';
import { source } from '@/lib/source';

export const revalidate = false;
export const { staticGET: GET } = createFromSource(source, {
  localeMap: {
    en: { language: 'english' },
    'zh-CN': { language: 'english' },
    'zh-HK': { language: 'english' },
  },
});
