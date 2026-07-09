import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { apiSidebar } from "./api-sidebar";

const api = apiSidebar("/zh-CN", "zh-CN");

export const zhCN: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; lang: string } = {
  label: "简体中文",
  lang: "zh-CN",
  description: "Navi 语言文档与试玩区",
  themeConfig: {
    nav: [
      { text: "文档", link: "/zh-CN/guide/introduction" },
      { text: "试玩区", link: "/zh-CN/playground" },
      { text: "API 参考", link: "/zh-CN/api/stdlib/" },
    ],
    sidebar: {
      "/zh-CN/api/": api,
      "/zh-CN/guide/": [
        {
          text: "快速入门",
          items: [
            { text: "简介", link: "/zh-CN/guide/introduction" },
            { text: "快速开始", link: "/zh-CN/guide/quick-start" },
            { text: "从 Pine Script V6 迁移", link: "/zh-CN/guide/pine-migration" },
            { text: "AI 助手", link: "/zh-CN/guide/ai-assistant" },
          ],
        },
        {
          text: "语言",
          items: [
            { text: "语言基础", link: "/zh-CN/guide/language-basics" },
            { text: "类型与变量", link: "/zh-CN/guide/types-and-variables" },
            { text: "控制结构", link: "/zh-CN/guide/control-structures" },
            { text: "函数与方法", link: "/zh-CN/guide/functions-and-methods" },
            { text: "自定义类型与枚举", link: "/zh-CN/guide/custom-types" },
            { text: "跨标的与多时间框架", link: "/zh-CN/guide/request-security" },
            { text: "文档注解", link: "/zh-CN/guide/doc-annotations" },
            { text: "示例", link: "/zh-CN/guide/examples" },
          ],
        },
      ],
    },
    outline: { label: "本页目录", level: [2, 3] },
    lastUpdated: { text: "最后更新" },
    docFooter: { prev: "上一页", next: "下一页" },
    darkModeSwitchLabel: "深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    langMenuLabel: "语言",
    footer: {
      message: "基于 MIT 许可证发布。",
      copyright: "版权所有 2024-present Navi 贡献者",
    },
  },
};
