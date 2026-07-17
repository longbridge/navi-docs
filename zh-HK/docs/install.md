# 安裝與使用 Navi

Navi 可以在多種環境中使用，請根據實際工作流程選擇：

| 使用環境 | 適用場景 |
| --- | --- |
| Longbridge App 或桌面端 | 直接在交易圖表中使用指標和策略 |
| Longbridge CLI | 使用 Longbridge 行情數據執行腳本、自動化、選股和回測 |
| `navi` CLI | 本機編寫、格式化、類型檢查、調試和 CI 驗證 |

日常和正式使用時，建議選擇 Longbridge App、桌面端或 Longbridge CLI。獨立的 `navi` CLI 主要是開發工具，不能取代 Longbridge 產品中的完整使用體驗。

## Longbridge App 和桌面端

需要在圖表中互動式使用 Navi 時，請使用 Longbridge App 或桌面端。Navi 執行環境已經整合在產品中，無需另行安裝 Navi CLI。

[下載 Longbridge](https://longbridge.com/download)

## Longbridge CLI

需要透過命令列使用 Longbridge 服務和行情數據時，請安裝 Longbridge CLI。

按照 [Longbridge CLI 安裝指南](https://open.longbridge.com/docs/cli/install)完成安裝，然後登入：

```bash
longbridge auth login
```

接下來可前往[快速開始](/zh-HK/docs/quick-start)，編寫腳本並使用 Longbridge 行情數據執行。完整命令選項請參閱 [`longbridge quant run` 文件](https://open.longbridge.com/docs/cli/quant)。

## 用於開發的 Navi CLI

在本機開發或調試 `.nv` 文件，或者在 CI 中驗證腳本時，可以安裝獨立的 `navi` CLI。

macOS 或 Linux：

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell：

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

確認安裝：

```bash
navi --version
```

獨立 CLI 不包含行情數據，只提供基礎的編譯、lint、格式化和執行能力，方便開發者及 AI 驗證腳本正確性。因此 `navi run` 必須透過 `--data` 接收調用方提供的 OHLCV CSV。快速開始會介紹如何構造模擬驗證數據，以及需要時如何取得真實 K 線。

## 下一步

- [快速開始](/zh-HK/docs/quick-start) — 編寫並驗證第一個 Navi 腳本
- [語言基礎](/zh-HK/docs/language-basics) — 學習 Navi 語法和命名規範
- [AI 助手](/zh-HK/docs/ai) — 安裝 Navi 編寫 skill
