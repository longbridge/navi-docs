# 歷史引用

在 Navi 中，每個表達式在每根 K 線上求值一次，產生一個時間序列。`[]` 運算子用於存取表達式在**前一根 K 線**上產生的值——不僅限於內建變數，任何表達式均可使用：

```navi
let previousClose = close[1];              // 一根 K 線前的收盤價
let twoBarsAgo    = high[2];               // 兩根 K 線前的最高價

let prevSma = ta.sma(close, 14)[1];        // 前一根 K 線的 SMA 值
let prevEma = ta.ema(close, 10)[3];        // 三根 K 線前的 EMA 值

let prevRange = (high - low)[1];           // 前一根 K 線的振幅

let myValue = close * volume;
let prevMyValue = myValue[1];              // myValue 在前一根 K 線的值
```

> **核心概念：** `ta.sma(close, 14)[1]` **不會**重新計算 SMA——它返回的是腳本在前一根 K 線執行時已計算好的值。

在歷史數據不足的早期 K 線上，結果為 `na`。偏移量可以是一個序列表達式：

```navi
let lookback: int = input.int(5, "Lookback");
let pastClose = close[lookback];
```

## 後續步驟

- [變量與限定符](/guide/types-and-variables) — `var`、類型限定符、`na`
- [集合](/guide/collections) — array、map、matrix
