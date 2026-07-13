---
layout: home

hero:
  name: Navi Skill
  text: 讓 AI 編寫地道腳本。
  tagline: 安裝 Navi skill 後，AI 編碼助手可以直接使用當前 Navi 語法、執行模型、標準庫和腳本編寫模式。
  actions:
    - theme: brand
      text: 安裝 Skill
      link: /zh-HK/guide/ai-assistant
    - theme: alt
      text: 閱讀文檔
      link: /zh-HK/guide/

features:
  - title: 一條命令安裝
    details: 使用 npx skills add longbridge/navi --skill navi 從 longbridge/navi 添加 skill。
  - title: 專注 Navi 語言
    details: Skill 只面向 .nv 指標、策略、庫、執行語義和 API 指引，不包含 Rust 實現細節。
  - title: 可直接讀取的參考
    details: 語法、執行模型、標準庫和編寫模式拆分為聚焦的參考文件，便於 AI 助手按需使用。
---

## 安裝

使用 [Skills CLI](https://github.com/vercel-labs/skills) 將 `navi` skill 加入你的 AI 編碼助手：

```bash
npx skills add longbridge/navi
```

## 更新

文檔更新後，拉取 skill 的最新版本：

```bash
npx skills update navi
```

更多針對不同助手的選項和用法，請參閱 [AI 助手指南](/zh-HK/guide/ai-assistant)。
