import { readFileSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vitepress";
import { en } from "./locales/en";
import { zhCN } from "./locales/zh-CN";
import { zhHK } from "./locales/zh-HK";

// ---------------------------------------------------------------------------
// VitePress config
// ---------------------------------------------------------------------------

export default defineConfig({
  title: "Navi",
  description: "Navi language documentation and playground",
  base: "/",
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
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
        aliases: ["nvs"],
      },
    ],
  },

  locales: {
    root: en,
    "zh-CN": zhCN,
    "zh-HK": zhHK,
  },

  themeConfig: {
    logo: "/logo.svg",
    outline: [2, 3],

    socialLinks: [
      { icon: "github", link: "https://github.com/longbridge/navi" },
    ],

    search: {
      provider: "local",
    },
  },
});
