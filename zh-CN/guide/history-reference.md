# 历史引用

在 Navi 中，每个表达式在每根 K 线上执行一次，产生一个时间序列值。`[]` 运算符用于访问表达式在**前几根 K 线**上产生的值——不仅限于内置变量，任何表达式都可以使用：

```navi
let previousClose = close[1];              // 前一根 K 线的收盘价
let twoBarsAgo    = high[2];               // 前两根 K 线的最高价

let prevSma = ta.sma(close, 14)[1];        // 前一根 K 线的 SMA 值
let prevEma = ta.ema(close, 10)[3];        // 前三根 K 线的 EMA 值

let prevRange = (high - low)[1];           // 前一根 K 线的振幅

let myValue = close * volume;
let prevMyValue = myValue[1];              // myValue 在前一根 K 线上的值
```

> **核心概念：** `ta.sma(close, 14)[1]` **不会**重新计算 SMA——它返回的是脚本在前一根 K 线上运行时已经计算好的值。

在历史数据不足的早期 K 线上，结果为 `na`。偏移量可以是一个序列表达式：

```navi
let lookback: int = input.int(5, "Lookback");
let pastClose = close[lookback];
```

## 下一步

- [类型与变量](/zh-CN/guide/types-and-variables) — `var`、类型限定符、`na`
- [集合](/zh-CN/guide/collections) — array、map、matrix
