import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { apiSidebar } from "./api-sidebar";

const api = apiSidebar("/zh-HK", "zh-HK");

export const zhHK: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; lang: string } = {
  label: "繁體中文",
  lang: "zh-HK",
  description: "Navi 語言文檔與試玩區",
  themeConfig: {
    nav: [
      { text: "文檔", link: "/zh-HK/guide/introduction" },
      { text: "Skill", link: "/zh-HK/skill" },
      { text: "試玩區", link: "/zh-HK/playground" },
      { text: "API 參考", link: "/zh-HK/api/stdlib/" },
    ],
    sidebar: {
      "/zh-HK/api/": api,
      "/zh-HK/guide/": [
        {
          text: "快速入門",
          items: [
            { text: "簡介", link: "/zh-HK/guide/introduction" },
            { text: "快速開始", link: "/zh-HK/guide/quick-start" },
            { text: "AI 助手", link: "/zh-HK/guide/ai-assistant" },
          ],
        },
        {
          text: "語言",
          items: [
            { text: "語言基礎", link: "/zh-HK/guide/language-basics" },
            { text: "歷史引用", link: "/zh-HK/guide/history-reference" },
            { text: "集合類型", link: "/zh-HK/guide/collections" },
            { text: "類型與變量", link: "/zh-HK/guide/types-and-variables" },
            { text: "控制結構", link: "/zh-HK/guide/control-structures" },
            { text: "函數與方法", link: "/zh-HK/guide/functions-and-methods" },
            { text: "自定義類型與枚舉", link: "/zh-HK/guide/custom-types" },
            { text: "跨標的與多時間框架", link: "/zh-HK/guide/request-security" },
            { text: "文檔注解", link: "/zh-HK/guide/doc-annotations" },
            { text: "示例", link: "/zh-HK/guide/examples" },
          ],
        },
      ],
    },
    outline: { label: "本頁目錄", level: [2, 3] },
    lastUpdated: { text: "最後更新" },
    docFooter: { prev: "上一頁", next: "下一頁" },
    darkModeSwitchLabel: "深色模式",
    sidebarMenuLabel: "選單",
    returnToTopLabel: "返回頂部",
    langMenuLabel: "語言",
    footer: {
      message: "基於 MIT 許可證發佈。",
      copyright: "版權所有 2024-present Navi 貢獻者",
    },
  },
};
