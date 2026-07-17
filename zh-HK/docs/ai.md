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

也可以[下載打包後的 skill](/navi-skill.zip)，並將它解壓到 AI 編碼助手的 skills 目錄。

同時安裝獨立的 `navi` CLI，讓 AI 編碼助手可以編譯並執行它編寫的腳本。

macOS 或 Linux：

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell：

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

確認 CLI 可用：

```bash
navi --version
```

Navi 文件或 API 更新後，可更新已安裝的 skill：

```bash
npx skills update navi
```

CLI 不包含行情數據。下方驗證流程會透過 `--data` 使用調用方提供的模擬或真實 OHLCV 數據。

## 使用

安裝後，兼容的 AI 編碼助手在處理 `.nv` 文件或你詢問 Navi 相關問題時即可使用該 skill。

```text
用 Navi 編寫一個完整的 VWAP 指標，支援設定上下軌。
儲存為 vwap_bands.nv，並使用 navi CLI 完成驗證。
```

為了獲得更準確的結果，建議說明：

- 腳本類型：指標、策略或庫
- 輸入參數，以及預期的繪圖、訊號或訂單
- 標的和週期假設
- 是否允許重繪，以及預熱要求
- 目標 `.nv` 文件名

## 推薦工作流程

1. 要求 AI 返回完整的 `.nv` 文件，而不是孤立代碼片段。
2. 文件名、變量、參數和函數統一使用 `snake_case`。
3. 要求 AI 使用獨立的 `navi` CLI 驗證文件：

   ```bash
   navi lint path/to/script.nv
   ```

4. 如果只有格式問題，先執行 `navi fmt`，然後重新 lint。
5. 需要驗證執行行為時，先構造一份較小的模擬 OHLCV CSV，數據量應覆蓋腳本最長回看週期，然後實際執行腳本：

   ```bash
   navi run path/to/script.nv \
     --data bars.csv \
     --symbol NASDAQ:AAPL \
     --timeframe 1D
   ```

6. 將驗證後的腳本用於 Longbridge CLI、App 或桌面端。獨立的 `navi` CLI 主要用於開發和調試。

只有 AI 成功執行 CLI 才能稱為「已驗證」；僅返回代碼區塊不代表完成驗證。

### 執行數據

獨立的 `navi` CLI 僅提供基礎編譯和本機執行能力，不包含也不會下載行情數據，因此 `navi run` 必須透過 `--data` 接收調用方提供的數據。AI 驗證預設應使用模擬數據：時間戳按 Unix 毫秒遞增，OHLC 價格關係合理，並根據腳本需要覆蓋預熱、上漲、下跌、橫盤和觸發訊號等場景。

需要真實數據時，按可用環境優先選擇：

- 已安裝並登入的 Longbridge CLI：執行 `longbridge kline history SYMBOL --start YYYY-MM-DD --end YYYY-MM-DD --format json`，再將返回的 K 線轉換為 `navi run` 所需的 CSV；也可以使用 `longbridge quant run` 直接基於 Longbridge 歷史數據執行腳本。
- AI 環境中的 Longbridge MCP：透過其行情工具請求歷史 K 線，再將返回的 OHLCV 轉換為 CSV。
- 兩者均不可用時，可使用可靠的公開數據源，但要核對授權、復權方式、時區、數據順序及缺失 K 線處理方式。

真實數據是對模擬場景的補充，不能代替專門構造、用於觸發關鍵分支的數據。

### 線上預覽

驗證完成後，AI 可以將完整 UTF-8 腳本編碼為不帶填充的 Base64URL，並放入 `code` 查詢參數，生成 Playground 預覽：

```text
https://navi-lang.org/playground?code=<base64url-source>
```

開啟連結後，Playground 會將腳本作為未儲存文件載入並添加到圖表。Base64URL 使用 `-`、`_` 代替 `+`、`/`，並移除末尾的 `=`。瀏覽器和聊天工具會限制 URL 長度，因此仍需同時保留源文件。

## 提問示例

```text
檢查 momentum_strategy.nv 是否存在重繪或 series 狀態錯誤。
修復文件並保持原有行為，完成後執行 navi lint。
```

```text
建立一個 Navi 庫，匯出 EMA 和交叉判斷輔助函數。
遵循 Navi 命名規範，儲存為 moving_average_helpers.nv，
並返回實際的 navi lint 結果。
```

Skill 將 [navi-lang.org](/zh-HK/docs/) 及其標準庫文件作為目前 API 的權威來源。
