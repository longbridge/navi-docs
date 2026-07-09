# 簡介

**Navi** 是一種用於編寫技術分析指標和交易策略的腳本語言，相容 Pine Script V6，透過 Longbridge 平台的 `lb` CLI 執行。

## 你可以構建什麼

- **指標** — 在圖表上繪製序列、形狀、標籤、線條和表格
- **策略** — 定義進出場規則，對歷史數據進行回測
- **庫** — 編寫可複用的函數和類型，供其他腳本導入

## 執行模型

腳本**逐 K 線**執行：引擎對每根 K 線執行一次腳本，從最早的歷史 K 線到最新的 K 線。這與 Pine Script 的執行模型相同——`close`、`open`、`high`、`low` 等所有序列值均代表當前 K 線。

使用 `close[1]` 回溯上一根 K 線的值，用 `var` 跨 K 線保持狀態，用 `barstate.is_last` 在最後一根 K 線執行邏輯。

## Pine Script 相容性

Navi 支援 Pine Script V6 語法。如果你有現成的 Pine Script 指標，只需少量修改即可在 Navi 上執行。詳見[從 Pine Script 遷移](/zh-HK/guide/pine-migration)。

## 下一步

- [快速開始](/zh-HK/guide/quick-start) — 使用 CLI 編寫並執行第一個指標
- [語言基礎](/zh-HK/guide/language-basics) — 學習 Navi 語法
- [從 Pine Script 遷移](/zh-HK/guide/pine-migration) — 轉換現有腳本
