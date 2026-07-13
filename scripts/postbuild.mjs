import { cpSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const contentRoot = join(root, 'content/docs');
const outRoot = join(root, 'out');
const siteUrl = 'https://navi-lang.org';

for (const locale of ['en', 'zh-CN', 'zh-HK']) {
  const sourceRoot = join(contentRoot, locale);
  for (const file of markdownFiles(sourceRoot)) {
    const path = relative(sourceRoot, file);
    const publicPath = locale === 'en' ? path : join(locale, path);
    const destination = join(outRoot, publicPath);
    mkdirSync(dirname(destination), { recursive: true });
    cpSync(file, destination);
  }
}

const englishRoot = join(contentRoot, 'en');
const pages = markdownFiles(englishRoot).filter((file) => !file.endsWith('/skill.md'));
const grouped = new Map();

for (const file of pages) {
  const path = relative(englishRoot, file);
  const group = path.split('/')[0];
  const list = grouped.get(group) ?? [];
  list.push({ path, ...parseDocument(readFileSync(file, 'utf8')) });
  grouped.set(group, list);
}

let index = '# Navi\n\n> A scripting language for trading charts — indicators, strategies, and libraries.\n\n';
index += '## For AI Coding Assistants\n\nInstall the Navi skill for accurate, idiomatic Navi code:\n\n```bash\nnpx skills add longbridge/navi --skill navi\n```\n\n';
for (const [group, documents] of grouped) {
  index += `## ${group === 'api' ? 'API Reference' : 'Guide'}\n\n`;
  for (const document of documents) index += `- [${document.title}](${siteUrl}/${document.path})\n`;
  index += '\n';
}
writeFileSync(join(outRoot, 'llms.txt'), index);

let full = '# Navi Documentation\n\n> A scripting language for trading charts — indicators, strategies, and libraries.\n\n';
for (const file of pages) {
  const document = parseDocument(readFileSync(file, 'utf8'));
  full += `# ${document.title}\n\n${document.content}\n\n---\n\n`;
}
writeFileSync(join(outRoot, 'llms-full.txt'), full);

function markdownFiles(directory) {
  const output = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...markdownFiles(path));
    else if (entry.name.endsWith('.md')) output.push(path);
  }
  return output.sort();
}

function parseDocument(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const frontmatter = match?.[1] ?? '';
  const content = (match?.[2] ?? source).trim();
  const title = frontmatter.match(/^title:\s*(.+)$/m)?.[1]?.replace(/^['"]|['"]$/g, '') ?? content.match(/^#\s+(.+)$/m)?.[1] ?? 'Navi';
  return { title, content };
}
