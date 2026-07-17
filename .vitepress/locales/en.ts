import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { apiSidebar } from "./api-sidebar";

const api = apiSidebar("", "en");

export const en: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  lang: string;
} = {
  label: "English",
  lang: "en",
  themeConfig: {
    nav: [
      { text: "Docs", link: "/docs/" },
      { text: "Skill", link: "/skill" },
      { text: "API", link: "/api/stdlib/" },
      { text: "Playground", link: "/playground" },
    ],
    sidebar: {
      "/api/": api,
      "/docs/": [
        {
          text: "Getting Started",
          items: [
            { text: "Introduction", link: "/docs/" },
            { text: "Install", link: "/docs/install" },
            { text: "Quick Start", link: "/docs/quick-start" },
            { text: "AI Assistant", link: "/docs/ai" },
          ],
        },
        {
          text: "Language",
          items: [
            { text: "Language Basics", link: "/docs/language-basics" },
            { text: "History Reference", link: "/docs/history-reference" },
            { text: "Collections", link: "/docs/collections" },
            {
              text: "Variables & Qualifiers",
              link: "/docs/types-and-variables",
            },
            { text: "Control Structures", link: "/docs/control-structures" },
            {
              text: "Functions & Methods",
              link: "/docs/functions-and-methods",
            },
            { text: "Custom Types & Enums", link: "/docs/custom-types" },
            {
              text: "Cross-Symbol & Multi-Timeframe",
              link: "/docs/request-security",
            },
            { text: "Doc Annotations", link: "/docs/doc-annotations" },
            { text: "Examples", link: "/docs/examples" },
          ],
        },
      ],
    },
    footer: {
      message:
        "Navi is created and maintained by <a href='https://longbridge.com'>Longbridge</a>.",
      copyright:
        "Copyright 2024-present <a href='https://longbridge.com'>Longbridge</a>",
    },
  },
};
