import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const skillRoot = path.join(root, "skills", "navi");
const generatedPages = new Set(["llms.txt", "llms-full.txt"]);

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) return markdownFiles(target);
      return entry.name.endsWith(".md") ? [target] : [];
    }),
  );
  return files.flat();
}

async function exists(target) {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

const failures = [];
for (const file of await markdownFiles(skillRoot)) {
  const source = await readFile(file, "utf8");
  const urls = source.matchAll(/https:\/\/navi-lang\.org\/([^\s)>`]+)/g);

  for (const match of urls) {
    const relativeUrl = match[1].replace(/[?#].*$/, "");
    if (!relativeUrl || generatedPages.has(relativeUrl)) continue;

    const sourcePath = path.join(root, relativeUrl);
    const markdownSourcePath = path.join(root, `${relativeUrl}.md`);
    const publicPath = path.join(root, "public", relativeUrl);
    if (!(await exists(sourcePath)) && !(await exists(markdownSourcePath)) && !(await exists(publicPath))) {
      failures.push(`${path.relative(root, file)}: https://navi-lang.org/${relativeUrl}`);
    }
  }
}

if (failures.length) {
  console.error("Invalid navi-lang.org links in the Navi skill:\n");
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Checked Navi skill links");
