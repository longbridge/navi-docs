import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { NaviPlayground, type ExampleScript } from './navi-playground';

function scriptsIn(directory: string, category: ExampleScript['category']): ExampleScript[] {
  return readdirSync(directory).filter((file) => file.endsWith('.nv')).sort().map((file) => ({
    name: file.replace(/\.nv$/, ''),
    source: readFileSync(join(directory, file), 'utf8'),
    category,
  }));
}

export function PlaygroundPage({ locale }: { locale: string }) {
  const root = join(process.cwd(), 'naviscripts');
  const examples = [...scriptsIn(join(root, 'indicators'), 'indicator'), ...scriptsIn(join(root, 'strategies'), 'strategy')];
  return <HomeLayout {...baseOptions(locale)}><NaviPlayground locale={locale} examples={examples} /></HomeLayout>;
}
