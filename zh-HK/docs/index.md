# 簡介

**Navi** 是一種用於編寫技術分析指標和交易策略的腳本語言，兼容 PineScript v6 語法，透過 Longbridge 平台的 `longbridge` CLI 執行。

## 你可以構建什麼

- **指標** — 在圖表上繪製序列、形狀、標籤、線條和表格
- **策略** — 定義進出場規則，對歷史數據進行回測
- **庫** — 編寫可複用的函數和類型，供其他腳本導入

## 語言設計

Navi 是靜態類型的編譯型語言。類型錯誤在腳本執行前就會被發現。編譯器在生成字節碼之前會執行多輪優化——常量折疊、死代碼消除和代數化簡，運行時只需處理已優化的指令序列。對於要求更高吞吐量的場景，可選的 JIT 編譯器（基於 Cranelift）會在運行時將字節碼編譯為本機機器碼。

Navi 採用**流式計算模型**：行情數據逐根 K 線流入，引擎對每根 K 線進行增量計算——從最早的歷史 K 線到最新 K 線，並在實時行情到來時持續處理。同一份腳本在歷史數據和實時數據上的行為完全一致，代碼無需區分兩種場景。所有行情數據——`close`、`open`、`high`、`low`、`volume`——都是 *series*（序列），自動維護完整的歷史記錄。透過 `close[1]` 訪問上一根 K 線的值，或 `close[N]` 訪問 N 根 K 線前的值。流式設計使內存佔用保持在低水位，指標邏輯也得以保持簡潔：只需編寫當前 K 線的計算，歷史管理由引擎自動完成。

## PineScript v6 語法兼容性 <Badge type="warning" text="experimental" />

`navi` CLI 兼容 PineScript v6 語法。將源碼儲存為 `.pine` 文件並傳入 `--pine`，即可直接編譯或執行。具體命令請參閱[快速開始](/zh-HK/docs/quick-start#執行-pinescript-文件)，Navi 語法請參閱[語言基礎](/zh-HK/docs/language-basics)。

## 下一步

- [安裝](/zh-HK/docs/install) — 選擇 Longbridge App、桌面端、Longbridge CLI 或本機開發 CLI
- [快速開始](/zh-HK/docs/quick-start) — 編寫並驗證第一個指標
- [語言基礎](/zh-HK/docs/language-basics) — 學習 Navi 語法
- [示例](/zh-HK/docs/examples) — 閱讀完整指標和策略
