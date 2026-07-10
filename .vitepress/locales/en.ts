import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { apiSidebar } from "./api-sidebar";

const api = apiSidebar("", "en");

export const en: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; lang: string } = {
  label: "English",
  lang: "en",
  themeConfig: {
    nav: [
      { text: "Docs", link: "/guide/introduction" },
      { text: "Skill", link: "/skill" },
      { text: "Playground", link: "/playground" },
      { text: "API Reference", link: "/api/stdlib/" },
    ],
    sidebar: {
      "/api/": api,
      "/guide/": [
        {
          text: "Getting Started",
          items: [
            { text: "Introduction", link: "/guide/introduction" },
            { text: "Quick Start", link: "/guide/quick-start" },
            { text: "AI Assistant", link: "/guide/ai-assistant" },
          ],
        },
        {
          text: "Language",
          items: [
            { text: "Language Basics", link: "/guide/language-basics" },
            { text: "History Reference", link: "/guide/history-reference" },
            { text: "Collections", link: "/guide/collections" },
            { text: "Types & Variables", link: "/guide/types-and-variables" },
            { text: "Control Structures", link: "/guide/control-structures" },
            { text: "Functions & Methods", link: "/guide/functions-and-methods" },
            { text: "Custom Types & Enums", link: "/guide/custom-types" },
            { text: "Cross-Symbol & Multi-Timeframe", link: "/guide/request-security" },
            { text: "Doc Annotations", link: "/guide/doc-annotations" },
            { text: "Examples", link: "/guide/examples" },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright 2024-present Navi Contributors",
    },
  },
};
