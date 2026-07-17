import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { apiSidebar } from "./api-sidebar";

const api = apiSidebar("/zh-CN", "zh-CN");

export const zhCN: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  lang: string;
} = {
  label: "简体中文",
  lang: "zh-CN",
  description: "Navi 语言文档与试玩区",
  themeConfig: {
    nav: [
      { text: "Docs", link: "/zh-CN/docs/" },
      { text: "Skill", link: "/zh-CN/skill" },
      { text: "API", link: "/zh-CN/api/stdlib/" },
      { text: "Playground", link: "/zh-CN/playground" },
    ],
    sidebar: {
      "/zh-CN/api/": api,
      "/zh-CN/docs/": [
        {
          text: "快速入门",
          items: [
            { text: "简介", link: "/zh-CN/docs/" },
            { text: "安装", link: "/zh-CN/docs/install" },
            { text: "快速开始", link: "/zh-CN/docs/quick-start" },
            { text: "AI 助手", link: "/zh-CN/docs/ai" },
          ],
        },
        {
          text: "语言",
          items: [
            { text: "语言基础", link: "/zh-CN/docs/language-basics" },
            { text: "历史引用", link: "/zh-CN/docs/history-reference" },
            { text: "集合类型", link: "/zh-CN/docs/collections" },
            { text: "变量与限定符", link: "/zh-CN/docs/types-and-variables" },
            { text: "控制结构", link: "/zh-CN/docs/control-structures" },
            { text: "函数与方法", link: "/zh-CN/docs/functions-and-methods" },
            { text: "自定义类型与枚举", link: "/zh-CN/docs/custom-types" },
            {
              text: "跨标的与多时间框架",
              link: "/zh-CN/docs/request-security",
            },
            { text: "文档注解", link: "/zh-CN/docs/doc-annotations" },
            { text: "示例", link: "/zh-CN/docs/examples" },
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
