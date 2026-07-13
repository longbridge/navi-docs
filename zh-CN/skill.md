---
layout: home

hero:
  name: Navi Skill
  text: 让 AI 编写地道脚本。
  tagline: 安装 Navi skill 后，AI 编码助手可以直接使用当前 Navi 语法、执行模型、标准库和脚本编写模式。
  actions:
    - theme: brand
      text: 安装 Skill
      link: /zh-CN/guide/ai-assistant
    - theme: alt
      text: 阅读文档
      link: /zh-CN/guide/

features:
  - title: 一条命令安装
    details: 使用 npx skills add longbridge/navi --skill navi 从 longbridge/navi 添加 skill。
  - title: 专注 Navi 语言
    details: Skill 只面向 .nv 指标、策略、库、执行语义和 API 指引，不包含 Rust 实现细节。
  - title: 可直接读取的参考
    details: 语法、执行模型、标准库和编写模式拆分为聚焦的参考文件，便于 AI 助手按需使用。
---

## 安装

使用 [Skills CLI](https://github.com/vercel-labs/skills) 将 `navi` skill 添加到你的 AI 编码助手：

```bash
npx skills add longbridge/navi
```

## 更新

文档更新后，拉取 skill 的最新版本：

```bash
npx skills update navi
```

更多针对不同助手的选项和用法，请参阅 [AI 助手指南](/zh-CN/guide/ai-assistant)。
