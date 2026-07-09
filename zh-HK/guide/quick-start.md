# 快速開始

Navi 腳本透過 `longbridge` CLI 在 Longbridge 平台上執行。

## 安裝 Longbridge CLI

請參閱[安裝指南](https://open.longbridge.com/docs/cli/install)。[`longbridge quant` 命令](https://open.longbridge.com/docs/cli/quant)用於對歷史數據執行 Navi 或 Pine Script 腳本。

## 編寫第一個指標

建立 `sma.nvs`：

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: color.ORANGE);
```

## 對歷史數據執行

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script sma.nvs
```

也可以直接透過管道傳入腳本：

```bash
cat sma.nvs | longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31
```

預設以表格形式輸出每根 K 線的值。使用 `--format json` 可獲取結構化輸出。

## 編寫策略

```navi
strategy("MA Cross", overlay: true);

let fast = ta.ema(close, input.int(10, "Fast"));
let slow = ta.ema(close, input.int(20, "Slow"));

if ta.crossover(fast, slow) { strategy.entry("Long", Direction.Long); }
if ta.crossunder(fast, slow) { strategy.entry("Short", Direction.Short); }

plot(fast, "Fast EMA");
plot(slow, "Slow EMA");
```

```bash
longbridge quant run AAPL.US --start 2023-01-01 --end 2024-12-31 --script macross.nvs
```

## 執行 Pine Script 文件

也可以直接執行已有的 Pine Script 文件（`.pine`）：

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script my_indicator.pine --dialect pine
```

## 下一步

- [語言基礎](/zh-HK/guide/language-basics)
- [標準庫](/zh-HK/api/stdlib/)
