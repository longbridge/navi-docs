import Link from 'next/link';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

const copy = {
  en: {
    title: 'Indicators. Strategies. Scripts.',
    description: 'A scripting language for trading charts — clean syntax, strong typing, and a powerful standard library.',
    start: 'Get Started', play: 'Playground',
    features: ['Indicators & Strategies', 'High Performance', 'Streaming & Realtime', 'Rich Standard Library', 'Pine Script V6 Compatible', 'Editor Support'],
  },
  'zh-CN': {
    title: '指标、策略、脚本。', description: '面向交易图表的脚本语言——语法清晰、类型严谨，并配备强大的标准库。', start: '开始使用', play: '演练场',
    features: ['指标与策略', '高性能', '流式与实时', '丰富标准库', '兼容 Pine Script V6', '编辑器支持'],
  },
  'zh-HK': {
    title: '指標、策略、腳本。', description: '面向交易圖表的腳本語言——語法清晰、類型嚴謹，並配備強大的標準庫。', start: '開始使用', play: '練習場',
    features: ['指標與策略', '高效能', '串流與即時', '豐富標準庫', '相容 Pine Script V6', '編輯器支援'],
  },
} as const;

export function HomePage({ locale }: { locale: string }) {
  const text = copy[locale as keyof typeof copy] ?? copy.en;
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return (
    <HomeLayout {...baseOptions(locale)}>
      <main className="container mx-auto flex flex-1 flex-col px-4 py-20 text-center md:py-32">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">{text.title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-fd-muted-foreground">{text.description}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link className="rounded-lg bg-fd-primary px-4 py-2 font-medium text-fd-primary-foreground" href={`${prefix}/guide/introduction`}>{text.start}</Link>
          <Link className="rounded-lg border px-4 py-2 font-medium" href={`${prefix}/playground`}>{text.play}</Link>
        </div>
        <section className="mx-auto mt-20 grid w-full max-w-5xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {text.features.map((feature) => <div className="rounded-xl border bg-fd-card p-5 font-medium" key={feature}>{feature}</div>)}
        </section>
      </main>
    </HomeLayout>
  );
}
