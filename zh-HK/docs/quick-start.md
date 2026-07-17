# 快速開始

開始前，請先[選擇並設定 Navi 的使用方式](/zh-HK/docs/install)。本指南使用 Longbridge CLI 和行情數據執行腳本，並將獨立的 `navi` CLI 作為可選的本機開發檢查工具。

## 編寫第一個指標

建立 `sma.nv`：

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: Color.BLUE);
```

<QuickStartSmaChart />

藍色線是該指標基於 AAPL 日 K 線計算出的 14 週期簡單移動平均線。該腳本已使用 `navi run` 和同一份 OHLCV 數據實際執行。

## 本機檢查（可選）

如果已安裝用於開發的獨立 `navi` CLI，可以在執行腳本前進行驗證：

```bash
navi lint sma.nv
```

`lint` 會檢查語法、類型、編譯、導入和規範格式。準備 OHLCV CSV 後，可執行：

```bash
navi run sma.nv --data bars.csv --symbol NASDAQ:AAPL --timeframe 1D
```

執行 `navi run --help` 可查看完整 CSV 格式和所有選項。

## 使用 Longbridge 執行

透過 Longbridge CLI 使用歷史行情數據執行指標：

```bash
cat sma.nv | longbridge quant run AAPL.US \
  --start 2024-01-01 \
  --end 2024-12-31
```

數據週期、輸入參數、輸出格式和回測選項請參閱 [`longbridge quant run` 文件](https://open.longbridge.com/docs/cli/quant)。同一個腳本也可以在 Longbridge App 或桌面端中互動式使用。

## 編寫策略

```navi
strategy("MA Cross", overlay: true);

let fast = ta.ema(close, input.int(10, "Fast"));
let slow = ta.ema(close, input.int(20, "Slow"));

if ta.cross_over(fast, slow) {
    strategy.close("Short");
    strategy.entry("Long", Direction.Long);
}
if ta.cross_under(fast, slow) {
    strategy.close("Long");
    strategy.entry("Short", Direction.Short);
}

plot(fast, "Fast EMA");
plot(slow, "Slow EMA");
```

```bash
navi lint ma_cross.nv
navi run ma_cross.nv --data bars.csv --symbol NASDAQ:AAPL --timeframe 1D
```

使用 500 根 AAPL 日 K 線執行該示例，CLI 輸出為：

```text
ran 500 bars; plots: 2; trades: 0 ; net profit: 0
```

## 執行 PineScript 文件 <Badge type="warning" text="experimental" />

`navi` CLI 兼容 PineScript v6 語法。將腳本儲存為 `.pine` 文件並傳入全域 `--pine` 參數，即可直接編譯或執行：

```bash
navi check my_indicator.pine --pine
navi run my_indicator.pine \
  --data bars.csv \
  --symbol NASDAQ:AAPL \
  --timeframe 1D \
  --pine
```

`.pine` 入口文件必須使用 `--pine` 參數；未傳入該參數時，本機 CLI 接受 Navi `.nv` 文件。

### 轉換為 Navi

下面兩個示例都計算布林帶。PineScript 填充上下軌區域，緊湊的 Navi 版本則使用趨勢變色中軌和簡潔的區間邊界。

```pine
// @version=6
indicator("Bollinger Bands", overlay=true)

length = input.int(20, "Length")
mult   = input.float(2.0, "Multiplier")

[basis, upper, lower] = ta.bb(close, length, mult)

plot(basis, "Basis", color.blue)
upper_plot = plot(upper, "Upper", color.red)
lower_plot = plot(lower, "Lower", color.green)
fill(upper_plot, lower_plot, color.new(color.blue, 90))
```

```navi
indicator("Bollinger Range", overlay: true);

let price_source = input.source(close, "Source");
let period = input.int(20, "Period", minval: 1);
let deviation = input.float(2.0, "Deviation", minval: 0.1);

let (middle, upper_band, lower_band) = ta.bb(price_source, period, deviation);
let middle_color = middle > middle[1] ? Color.GREEN : Color.RED;

plot(middle, "Trend Basis", color: middle_color, line_width: 2);
plot(upper_band, "Upper Range", color: Color.BLUE);
plot(lower_band, "Lower Range", color: Color.BLUE);
```

## 下一步

- [語言基礎](/zh-HK/docs/language-basics)
- [標準庫](/zh-HK/api/stdlib/)
