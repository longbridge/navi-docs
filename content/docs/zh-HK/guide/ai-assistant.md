---
title: "AI 助手"
---

# AI 助手

**navi** skill 為 AI 編碼助手提供 Navi 語言的專用知識——語法、執行模型、標準庫和常用模式——使其無需每次會話重新學習，即可編寫正確、地道的 `.nv` 指標和策略腳本。

## 包含內容

Skill 包含四個按需載入的參考文件：

| 文件 | 用途 |
|---|---|
| `syntax.md` | 語言語法——聲明、控制流、函數、struct/enum/newtype、導入 |
| `execution-model.md` | 逐 bar 執行、類型限定符（`const`/`input`/`simple`/`series`）、`var`/`varip`、`na`、歷史引用、避免重繪 |
| `stdlib.md` | 內置函數——prelude、`ta`/`math`/`str`、`Array`/`Map`/`Matrix`、繪圖、`strategy` |
| `patterns.md` | 經典模式——indicator/strategy/library 框架、預熱守衛、有狀態累加器、交叉邏輯、常見陷阱 |

## 安裝

使用 Skills CLI 從 `longbridge/navi` 倉庫安裝：

```bash
npx skills add longbridge/navi
```

如需先查看倉庫中可安裝的 skill：

```bash
npx skills add longbridge/navi --list
```

如果安裝器要求選擇 skill，請選擇 `navi`。也可以顯式安裝：

```bash
npx skills add longbridge/navi --skill navi
```

## 使用

安裝後，兼容的 AI 編碼助手在處理 `.nv` 文件或你詢問 Navi 相關問題時即可使用該 skill。

```
用 Navi 寫一個帶上下軌輸入參數的 VWAP 指標。
```
