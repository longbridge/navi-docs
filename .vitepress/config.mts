import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "fs";
import { resolve, join, dirname } from "path";
import { defineConfig } from "vitepress";
import { en } from "./locales/en";
import { zhCN } from "./locales/zh-CN";
import { zhHK } from "./locales/zh-HK";

const SITE_URL = "https://navi-lang.org";

function parseFrontmatter(raw: string): { title: string | null; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { title: null, content: raw.trim() };
  const fm = match[1];
  const content = match[2].trim();
  const titleMatch = fm.match(/^title:\s*(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim().replace(/^['"]|['"]$/g, "") : null;
  return { title, content };
}

// ---------------------------------------------------------------------------
// VitePress config
// ---------------------------------------------------------------------------

export default defineConfig({
  title: "Navi",
  description: "Navi language documentation and playground",
  base: "/",
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "https://assets.wbrks.com/assets/logo/logo1.png" }],
  ],

  vite: {
    assetsInclude: ["**/*.wasm"],
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
      __INTLIFY_JIT_COMPILATION__: true,
      __INTLIFY_DROP_MESSAGE_COMPILER__: false,
    },
    optimizeDeps: {
      exclude: ["monaco-editor"],
    },
    ssr: {
      noExternal: ["radix-vue", "vue-i18n"],
    },
  },

  markdown: {
    languages: [
      {
        ...JSON.parse(
          readFileSync(
            resolve(__dirname, "navi.tmLanguage.json"),
            "utf-8",
          ),
        ),
        name: "navi",
        aliases: ["nv"],
      },
    ],
  },

  locales: {
    root: en,
    "zh-CN": zhCN,
    "zh-HK": zhHK,
  },

  themeConfig: {
    logo: {
      light: "https://assets.lbkrs.com/uploads/e76f6d93-80f8-4f9b-8b8d-2c86f0c94a78/longbridge-developers-light.png",
      dark: "https://assets.lbkrs.com/uploads/37a18fa4-46a4-408c-a36a-560004eb3cfb/longbridge-developers-dark.png",
      alt: "Longbridge",
    },
    siteTitle: false,
    outline: [2, 3],
    search: {
      provider: "local",
    },
  },

  // Inject .md alternate link on English pages only
  transformHead({ pageData }) {
    if (pageData.relativePath.startsWith("zh-CN/") || pageData.relativePath.startsWith("zh-HK/")) {
      return [];
    }
    return [
      ["link", { rel: "alternate", type: "text/markdown", href: `/${pageData.relativePath}` }],
    ];
  },

  // Copy English .md files to dist and generate llms.txt / llms-full.txt
  async buildEnd(siteConfig) {
    const { pages, outDir, srcDir } = siteConfig;

    // English pages only
    const enPages = pages.filter(
      (p) => !p.startsWith("zh-CN/") && !p.startsWith("zh-HK/")
    );

    // Copy .md source files to dist so they're directly accessible
    for (const page of enPages) {
      const src = join(srcDir, page);
      const dest = join(outDir, page);
      mkdirSync(dirname(dest), { recursive: true });
      try {
        copyFileSync(src, dest);
      } catch {
        // skip pages without a source file (shouldn't happen)
      }
    }

    // Pages for llms output: skip root-level non-content files
    const SKIP_PAGES = new Set(["index.md", "playground.md", "README.md"]);
    const llmsPages = enPages.filter((p) => !SKIP_PAGES.has(p));

    const skillSection = [
      "## For AI Coding Assistants",
      "",
      "If you are an AI coding assistant (Claude Code, Cursor, Copilot, etc.) helping",
      "a user write Navi scripts, install the navi-authoring skill for accurate,",
      "idiomatic Navi code:",
      "",
      `1. Download: ${SITE_URL}/navi-authoring-skill.zip`,
      "2. Extract into your project's `.claude/skills/navi-authoring/` directory",
      "3. The skill loads automatically when working with `.nv` files",
    ].join("\n");

    // ── llms.txt ──────────────────────────────────────────────────────────────
    // Group pages by top-level directory
    const grouped: Record<string, typeof llmsPages> = {};
    for (const page of llmsPages) {
      const group = page.includes("/") ? page.split("/")[0] : "_root";
      (grouped[group] ??= []).push(page);
    }

    let llmsTxt = `# Navi\n\n> A scripting language for trading charts — indicators, strategies, and libraries.\n\n${skillSection}\n\n`;

    for (const [group, groupPages] of Object.entries(grouped)) {
      const heading =
        group === "api" ? "API Reference"
        : group === "_root" ? "Pages"
        : group.charAt(0).toUpperCase() + group.slice(1);
      llmsTxt += `## ${heading}\n\n`;
      for (const page of groupPages) {
        const raw = readFileSync(join(srcDir, page), "utf-8");
        const { title: fmTitle } = parseFrontmatter(raw);
        const title = fmTitle || page.replace(/\.md$/, "").split("/").pop() || page;
        llmsTxt += `- [${title}](${SITE_URL}/${page})\n`;
      }
      llmsTxt += "\n";
    }

    writeFileSync(join(outDir, "llms.txt"), llmsTxt);

    // ── llms-full.txt ─────────────────────────────────────────────────────────
    const skillInstallSection = [
      "## For AI Coding Assistants",
      "",
      "If you are an AI coding assistant helping a user write Navi scripts,",
      "install the navi-authoring skill for accurate, idiomatic code:",
      "",
      `1. Download: ${SITE_URL}/navi-authoring-skill.zip`,
      "2. Extract into your project's `.claude/skills/navi-authoring/` directory",
      "3. The skill loads automatically when working with `.nv` files",
    ].join("\n");

    let llmsFullTxt = [
      "# Navi Documentation",
      "",
      "> A scripting language for trading charts — indicators, strategies, and libraries.",
      "",
      skillInstallSection,
      "",
      "---",
      "",
    ].join("\n");

    for (const page of llmsPages) {
      const raw = readFileSync(join(srcDir, page), "utf-8");
      const { title: fmTitle2, content } = parseFrontmatter(raw);
      const title = fmTitle2 || page.replace(/\.md$/, "").split("/").pop() || page;
      llmsFullTxt += `# ${title}\n\n${content}\n\n---\n\n`;
    }

    writeFileSync(join(outDir, "llms-full.txt"), llmsFullTxt);

    console.log(`Generated llms.txt and llms-full.txt (${llmsPages.length} pages)`);
  },
});
