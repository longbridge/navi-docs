import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { HomePage } from '@/components/home-page';
import { PlaygroundPage } from '@/components/playground-page';

type Props = { params: Promise<{ slug?: string[] }> };
const locales = new Set(['zh-CN', 'zh-HK']);

function parsePath(slug?: string[]) {
  const locale = slug?.[0] && locales.has(slug[0]) ? slug[0] : 'en';
  return { locale, contentSlug: locale === 'en' ? slug : slug?.slice(1) };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { locale, contentSlug } = parsePath(slug);
  if (!contentSlug?.length) return <HomePage locale={locale} />;
  if (contentSlug.length === 1 && contentSlug[0] === 'playground') return <PlaygroundPage locale={locale} />;
  const page = source.getPage(contentSlug, locale);
  if (!page) notFound();
  const MDX = page.data.body;
  return <DocsLayout tree={source.getPageTree(locale)} {...baseOptions(locale)}><DocsPage toc={page.data.toc}><DocsTitle>{page.data.title}</DocsTitle>{page.data.description && <DocsDescription>{page.data.description}</DocsDescription>}<DocsBody><MDX components={{ ...defaultMdxComponents }} /></DocsBody></DocsPage></DocsLayout>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { locale, contentSlug } = parsePath(slug);
  if (!contentSlug?.length) return { title: 'Navi', description: 'A scripting language for trading charts' };
  const page = source.getPage(contentSlug, locale);
  return page ? { title: `${page.data.title} — Navi`, description: page.data.description } : {};
}

export function generateStaticParams() {
  const pages = source.generateParams().map(({ lang, slug }) => ({ slug: lang === 'en' ? slug : [lang, ...slug] }));
  return [{ slug: [] }, { slug: ['playground'] }, { slug: ['zh-CN'] }, { slug: ['zh-CN', 'playground'] }, { slug: ['zh-HK'] }, { slug: ['zh-HK', 'playground'] }, ...pages];
}
