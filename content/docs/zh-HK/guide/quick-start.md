---
title: "快速開始"
---

# 快速開始

Navi 腳本透過 `longbridge` CLI 在 Longbridge 平台上執行。

## 安裝 Longbridge CLI

請參閱[安裝指南](https://open.longbridge.com/docs/cli/install)。[`longbridge quant` 命令](https://open.longbridge.com/docs/cli/quant)用於對歷史數據執行 Navi 或 Pine Script 腳本。

## 編寫第一個指標

建立 `sma.nv`：

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: color.ORANGE);
```

## 對歷史數據執行

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script sma.nv
```

也可以直接透過管道傳入腳本：

```bash
cat sma.nv | longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31
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
longbridge quant run AAPL.US --start 2023-01-01 --end 2024-12-31 --script macross.nv
```

## 執行 Pine Script 文件

使用 `--dialect pine` 參數可直接執行已有的 Pine Script 文件，無需修改任何程式碼：

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script my_indicator.pine --dialect pine
```

`--dialect` 參數用於指定腳本語言：

| 值 | 語言 |
|---|---|
| `navi` | Navi（`.nv` 文件的預設值） |
| `pine` | Pine Script V6（`.pine` 文件的預設值） |

如果文件使用了正確的副檔名（`.nv` 或 `.pine`），語言會自動識別，無需手動指定 `--dialect`。

### 轉換為 Navi

新腳本建議使用 Navi（`.nv`），可獲得完整的編輯器支援。下面是同一個布林帶指標分別用兩種語言編寫的對比：

```pine
// Pine Script
// @version=6
indicator("Bollinger Bands", overlay=true)

length = input.int(20, "Length")
mult   = input.float(2.0, "Multiplier")

[basis, upper, lower] = ta.bb(close, length, mult)

plot(basis, "Basis", color.blue)
plot(upper, "Upper", color.red)
plot(lower, "Lower", color.green)
fill(upper, lower, color.new(color.blue, 90))
```

```navi
// Navi
indicator("Bollinger Bands", overlay: true);

let length = input.int(20, "Length");
let mult   = input.float(2.0, "Multiplier");

let (basis, upper, lower) = ta.bb(close, length, mult);

plot(basis, "Basis", color.BLUE);
plot(upper, "Upper", color.RED);
plot(lower, "Lower", color.GREEN);
fill(upper, lower, color.new(color.BLUE, 90));
```

## 下一步

- [語言基礎](/zh-HK/guide/language-basics)
- [標準庫](/zh-HK/api/stdlib/)
