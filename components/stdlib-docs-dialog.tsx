'use client';

import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { displayType, values, type FunctionDoc, type StdlibDocs, type TypeDoc } from '@/lib/stdlib-docs';

type Item = { module: string; kind: 'function' | 'type'; doc: FunctionDoc | TypeDoc };

export function StdlibDocsDialog({ docs, locale, onClose }: { docs: StdlibDocs; locale: string; onClose(): void }) {
  const items = useMemo(() => Object.entries(docs.modules ?? {}).flatMap(([module, value]) => [
    ...values(value.functions).map((doc) => ({ module, kind: 'function' as const, doc })),
    ...values(value.types).map((doc) => ({ module, kind: 'type' as const, doc })),
  ]), [docs]);
  const [query, setQuery] = useState('');
  const filtered = items.filter((item) => `${item.module}.${item.doc.name} ${item.doc.description ?? ''}`.toLowerCase().includes(query.toLowerCase()));
  const [selectedKey, setSelectedKey] = useState(() => filtered[0] ? key(filtered[0]) : '');
  const selected = filtered.find((item) => key(item) === selectedKey) ?? filtered[0];
  const prefix = locale === 'en' ? '' : `/${locale}`;

  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/55 p-4" role="dialog" aria-modal="true" aria-label="Standard library">
    <div className="flex h-[min(760px,90vh)] w-[min(1080px,96vw)] flex-col overflow-hidden rounded-xl border bg-fd-background shadow-2xl">
      <header className="flex items-center gap-3 border-b px-4 py-3"><div><h2 className="font-semibold">Standard library</h2><p className="text-xs text-fd-muted-foreground">Functions and types available in Navi</p></div><button className="ml-auto rounded-md border p-1.5" onClick={onClose} aria-label="Close"><X className="size-4" /></button></header>
      <div className="grid min-h-0 flex-1 md:grid-cols-[300px_1fr]">
        <aside className="flex min-h-0 flex-col border-r"><label className="m-3 flex items-center gap-2 rounded-md border px-2"><Search className="size-4 text-fd-muted-foreground"/><input className="min-w-0 flex-1 bg-transparent py-2 outline-none" placeholder="Search symbols" value={query} onChange={(e) => setQuery(e.target.value)} /></label><nav className="min-h-0 overflow-auto px-2 pb-3">{filtered.map((item) => <button key={key(item)} className={`block w-full rounded-md px-3 py-2 text-left ${selected && key(item) === key(selected) ? 'bg-fd-accent' : 'hover:bg-fd-muted'}`} onClick={() => setSelectedKey(key(item))}><span className="block truncate font-mono text-xs">{item.module}.{item.doc.name}</span><span className="text-[11px] text-fd-muted-foreground">{item.kind}</span></button>)}{filtered.length === 0 && <p className="p-4 text-fd-muted-foreground">No matching symbols.</p>}</nav></aside>
        <main className="min-h-0 overflow-auto p-6">{selected ? <SymbolDetails item={selected} href={`${prefix}/api/stdlib/${selected.module}/`} /> : <p className="text-fd-muted-foreground">Select a symbol.</p>}</main>
      </div>
    </div>
  </div>;
}

function SymbolDetails({ item, href }: { item: Item; href: string }) {
  const doc = item.doc;
  return <><div className="mb-6 flex flex-wrap items-start justify-between gap-3"><div><p className="mb-1 text-xs uppercase tracking-wide text-fd-muted-foreground">{item.kind}</p><h3 className="font-mono text-2xl font-semibold">{item.module}.{doc.name}</h3></div><Link className="rounded-md border px-3 py-1.5 text-xs hover:bg-fd-muted" href={href}>Open full API docs</Link></div>{doc.description && <p className="mb-6 max-w-3xl leading-7 text-fd-muted-foreground">{doc.description}</p>}{item.kind === 'function' ? <div className="space-y-5">{((doc as FunctionDoc).overloads ?? []).map((overload, index) => <section key={index} className="rounded-lg border p-4"><pre className="mb-3 overflow-auto rounded-md bg-fd-muted p-3 text-sm"><code>{overload.signature ?? `${doc.name}(${(overload.params ?? []).map((p) => `${p.name}: ${displayType(p.type)}`).join(', ')})`}</code></pre>{overload.description && <p className="mb-3 text-sm text-fd-muted-foreground">{overload.description}</p>}{(overload.params?.length ?? 0) > 0 && <dl className="space-y-2">{overload.params!.map((param) => <div key={param.name} className="grid gap-1 text-sm sm:grid-cols-[150px_1fr]"><dt className="font-mono">{param.name}: {displayType(param.type)}</dt><dd className="text-fd-muted-foreground">{param.description}</dd></div>)}</dl>}</section>)}</div> : <TypeDetails doc={doc as TypeDoc} />}</>;
}

function TypeDetails({ doc }: { doc: TypeDoc }) { return <div className="space-y-2">{doc.fields?.map((field) => <div className="rounded-md border p-3" key={field.name}><code>{field.name}: {displayType(field.type)}</code>{field.description && <p className="mt-1 text-sm text-fd-muted-foreground">{field.description}</p>}</div>)}{doc.variants?.map((variant) => <div className="rounded-md border p-3" key={variant.name}><code>{variant.name}</code>{variant.description && <p className="mt-1 text-sm text-fd-muted-foreground">{variant.description}</p>}</div>)}</div>; }
function key(item: Item) { return `${item.module}:${item.kind}:${item.doc.name}`; }
