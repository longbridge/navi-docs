# 跨标的与多时间框架

`request.security()` 在不同标的和/或时间框架的上下文中对表达式求值，并将结果对齐到当前图表 bar。它是 Navi 中访问多时间框架（MTF）数据和其他标的数据的主要方式。

## 基本语法

```navi
request.security(symbol, timeframe, expression, gaps, lookahead, ignore_invalid_symbol, currency, calc_bars_count)
```

| 参数 | 类型 | 说明 |
|---|---|---|
| `symbol` | `string` | 标的标识符，如 `"NASDAQ:AAPL"` 或 `syminfo.tickerid` |
| `timeframe` | `string` | 时间框架字符串，如 `"D"`、`"W"`、`"60"` |
| `expression` | 任意 series | 在请求的标的/时间框架上求值的表达式 |
| `gaps` | `BarmergeGaps` | `BarmergeGaps.Off`（默认）：延续最后值；`BarmergeGaps.On`：无新值时发出 `na` |
| `lookahead` | `BarmergeLookahead` | `BarmergeLookahead.Off`（默认）或 `BarmergeLookahead.On` |
| `ignore_invalid_symbol` | `bool` | 若为 `true`，未知标的返回 `na` 而不报错 |
| `currency` | `string` | 价格转换的目标货币 |
| `calc_bars_count` | `int` | 可选的正整数，用于限制请求流加载的最近历史窗口大小 |

## 基础示例

### 高时间框架收盘价

```navi
indicator("日线图上的周线收盘价", overlay: true);

let weekly_close = request.security(syminfo.tickerid, "W", close);
plot(weekly_close, "周线收盘", color: color.BLUE);
```

### 其他标的

```navi
indicator("AAPL 图上的 SPY", overlay: false);

let spy_close = request.security("AMEX:SPY", "D", close);
plot(spy_close);
```

### 高时间框架指标

```navi
indicator("周线 RSI");

let weekly_rsi = request.security(syminfo.tickerid, "W", ta.rsi(close, 14));
plot(weekly_rsi);
hline(70);
hline(30);
```

## 时间框架字符串

| 字符串 | 含义 |
|---|---|
| `"1"`、`"5"`、`"15"`、`"60"` | 分钟 |
| `"D"` | 日线 |
| `"W"` | 周线 |
| `"M"` | 月线 |
| `"3M"`、`"6M"` | 多月 |

使用 `timeframe.period` 引用图表自身的时间框架。

## `calc_bars_count`

当请求只需要最近一小段历史时，可以使用 `calc_bars_count`。

- 传入正整数后，provider 最多为该请求流加载这么多最近 bar。
- `na` 表示不设置上限。

```navi
let recent_weekly = request.security(syminfo.tickerid, "W", close, calc_bars_count: 2);
```

## gaps（空缺填充）

当请求的时间框架高于图表时间框架时，高时间框架 bar 收盘的频率低于图表 bar 推进的频率。

- **`BarmergeGaps.Off`**（默认）：最后已知值向前延续——序列中不会出现 `na`。
- **`BarmergeGaps.On`**：每个高时间框架 bar 尚未收盘的图表 bar 都会发出 `na`。

<img class="light-only" src="/request-security-alignment.svg" alt="MTF 对齐与 gaps" style="width:100%;max-width:600px;">
<img class="dark-only" src="/request-security-alignment-dark.svg" alt="MTF 对齐与 gaps" style="width:100%;max-width:600px;">

```navi
// Off（默认）：weekly_close 始终有值
let weekly_close = request.security(syminfo.tickerid, "W", close);

// On：除周五（周线 bar 收盘）外的所有交易日均为 na
let weekly_close_gaps = request.security(syminfo.tickerid, "W", close, gaps: BarmergeGaps.On);
```

## lookahead（超前读取）

`BarmergeLookahead.On` 使表达式在周期内的第一个图表 bar 就能看到高时间框架 bar 的**最终值**，而不是正在形成中的值。这会在历史 bar 中引入未来数据泄漏——仅在明确需要时使用。

<img class="light-only" src="/request-security-lookahead.svg" alt="BarmergeLookahead.Off 与 BarmergeLookahead.On 对比" style="width:100%;max-width:600px;">
<img class="dark-only" src="/request-security-lookahead-dark.svg" alt="BarmergeLookahead.Off 与 BarmergeLookahead.On 对比" style="width:100%;max-width:600px;">

```navi
// 默认：看到正在形成的周线开盘价（本周内持续更新）
let weekly_open = request.security(syminfo.tickerid, "W", open);

// 使用 lookahead：周一即可看到已确认的周线开盘价
let weekly_open_confirmed = request.security(syminfo.tickerid, "W", open, lookahead: BarmergeLookahead.On);
```

## `var` 和 `varip` 变量

`var` 和 `varip` 变量需在脚本顶层声明，不能在 `expression` 参数内部声明。子实例会在请求的标的/时间框架上执行完整程序体，因此顶层的 `var` 状态会在**请求的**时间框架的各个 bar 之间独立累积：

```navi
indicator("累计成交量（周线）");

// 在顶层声明——子实例在周线 bar 上累积此变量
var cum: float = 0.0;
cum += volume;

let weekly_cum_vol = request.security(syminfo.tickerid, "W", cum);
plot(weekly_cum_vol);
```

每个 `request.security` 调用点都有独立的子实例——其 `var` 状态与主脚本及其他 `request.security` 调用互相独立。

## 元组

表达式可以以元组形式返回多个值：

```navi
indicator("周线 OHLC");

let (w_open, w_high, w_low, w_close) =
    request.security(syminfo.tickerid, "W", (open, high, low, close));

plot_candle(w_open, w_high, w_low, w_close);
```

## `ignore_invalid_symbol`

当标的可能不存在于数据提供者中时使用此参数：

```navi
let price = request.security("SOME:SYMBOL", "D", close, ignore_invalid_symbol: true);
// 标的未识别时 price 为 na，不会触发运行时错误
```

不使用此参数时，未识别的标的会触发运行时错误并中止执行。

## `request.security_lower_tf`

获取低时间框架数据时，使用 `request.security_lower_tf`。它返回一个 `Array<T>`，包含当前图表 bar 内所有子 bar 的值，按升序排列：

<img class="light-only" src="/request-security-lower-tf.svg" alt="security_lower_tf — 子 bar 收集为数组" style="width:100%;max-width:580px;">
<img class="dark-only" src="/request-security-lower-tf-dark.svg" alt="security_lower_tf — 子 bar 收集为数组" style="width:100%;max-width:580px;">

```navi
indicator("日线图上的分钟级最高价");

// 返回每根日线 bar 内所有 1 分钟 bar 的最高价
let minute_highs = request.security_lower_tf(syminfo.tickerid, "1", high);

// 当前日线 bar 内的最高 1 分钟最高价
let intraday_high = minute_highs.max();
plot(intraday_high);
```

当某个 bar 内没有子 bar 数据时，数组为空（`minute_highs.size() == 0`）。

## Ticker 表达式

Ticker 表达式是一个将多个标的通过算术运算符组合的字符串。Navi 会将其分解为独立的 `DataProvider` 请求，逐 bar 对表达式求值，并将结果作为单一序列返回。

### 支持的运算符

| 运算符 | 示例 | 结果 |
|---|---|---|
| `*` | `"AAPL*2"` | 标的值 × 标量 |
| `/` | `"AAPL/SPY"` | 两个标的的比值 |
| `+` | `"AAPL+MSFT"` | 两个标的之和 |
| `-` | `"AAPL-MSFT"` | 两个标的之差 |

操作数可以是标的字符串（`"EXCHANGE:TICKER"`）或数字字面量。运算符优先级与标准数学一致，必要时可使用括号。

### 示例

**加权组合（50/50 投资组合）**

```navi
let blend = request.security("NASDAQ:AAPL*0.5+AMEX:SPY*0.5", "D", close);
```

**相对表现（比值）**

```navi
// AAPL 相对于 SPY 的价格——买一股 AAPL 需要多少股 SPY？
let ratio = request.security("NASDAQ:AAPL/AMEX:SPY", "D", close);
plot(ratio);
```

**价差（差值）**

```navi
// 黄金/白银价差
let spread = request.security("COMEX:GC1!/COMEX:SI1!", "D", close);
plot(spread);
```

**多标的等权指数**

```navi
// 四只科技股等权平均
let tech = request.security(
    "NASDAQ:AAPL*0.25+NASDAQ:MSFT*0.25+NASDAQ:GOOGL*0.25+NASDAQ:AMZN*0.25",
    "D",
    close
);
plot(tech);
```

### 执行原理

对于 `"AAPL*0.5+SPY*0.5"` 这样的表达式，Navi 的处理步骤：

1. 提取各个标的（`AAPL`、`SPY`），通过 `DataProvider` 获取对应的 K 线数据。
2. 每个 bar 上，使用各标的子实例中请求的 `expression` 字段（如 `close`）对算术表达式求值。
3. 将计算得到的标量结果对齐到图表 bar 后返回。

表达式中的每个标的都计入 `max_security_calls` 限制，与普通 `request.security` 调用相同。

## 限制

- **嵌套深度**：默认情况下，`request.security` 表达式内部最多可嵌套调用 `request.security` 3 层（可通过 `ExecutionLimits::max_security_depth` 配置）。
- **调用次数**：每个唯一的 `(symbol, timeframe)` 组合计入 `ExecutionLimits::max_security_calls`（默认 40）。
