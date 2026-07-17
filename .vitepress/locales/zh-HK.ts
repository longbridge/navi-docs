import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { apiSidebar } from "./api-sidebar";

const api = apiSidebar("/zh-HK", "zh-HK");

export const zhHK: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  lang: string;
} = {
  label: "繁體中文",
  lang: "zh-HK",
  description: "Navi 語言文檔與試玩區",
  themeConfig: {
    nav: [
      { text: "Docs", link: "/zh-HK/docs/" },
      { text: "Skill", link: "/zh-HK/skill" },
      { text: "API", link: "/zh-HK/api/stdlib/" },
      { text: "Playground", link: "/zh-HK/playground" },
    ],
    sidebar: {
      "/zh-HK/api/": api,
      "/zh-HK/docs/": [
        {
          text: "快速入門",
          items: [
            { text: "簡介", link: "/zh-HK/docs/" },
            { text: "安裝", link: "/zh-HK/docs/install" },
            { text: "快速開始", link: "/zh-HK/docs/quick-start" },
            { text: "AI 助手", link: "/zh-HK/docs/ai" },
          ],
        },
        {
          text: "語言",
          items: [
            { text: "語言基礎", link: "/zh-HK/docs/language-basics" },
            { text: "歷史引用", link: "/zh-HK/docs/history-reference" },
            { text: "集合類型", link: "/zh-HK/docs/collections" },
            { text: "變量與限定符", link: "/zh-HK/docs/types-and-variables" },
            { text: "控制結構", link: "/zh-HK/docs/control-structures" },
            { text: "函數與方法", link: "/zh-HK/docs/functions-and-methods" },
            { text: "自定義類型與枚舉", link: "/zh-HK/docs/custom-types" },
            {
              text: "跨標的與多時間框架",
              link: "/zh-HK/docs/request-security",
            },
            { text: "文檔注解", link: "/zh-HK/docs/doc-annotations" },
            { text: "示例", link: "/zh-HK/docs/examples" },
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
