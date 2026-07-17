# 示例

本页通过两个完整的 Navi 脚本，逐行讲解每行代码的用途。每个示例都以贴近实际的方式展示核心语言特性。

## 示例一 — SMA 均线交叉指标

该指标绘制快速和慢速简单移动均线，并在图表上标记金叉和死叉事件。涉及变量、series、`ta` 模块、`plot` 和 `plot_shape` 等特性。

- [简单移动平均（SMA）](https://en.wikipedia.org/wiki/Moving_average#Simple_moving_average)

```navi
// ① 将此脚本声明为指标。
//   - title        : 显示在图例中的名称
//   - overlay=true : 叠加在 K 线上绘制（而非独立面板）
indicator("SMA Crossover", overlay:  true);

// ② 用户可配置的输入项。
//   input.int() 创建一个整数输入，显示在脚本设置面板中。
//   第二个参数为默认值；title 为在 UI 中显示的标签。
let fastLen = input.int(9,  title:  "Fast Length");
let slowLen = input.int(21, title:  "Slow Length");

// ③ 计算两条 SMA series。
//   这些是 series<float>：每个 Bar 产生一个值。
let fast = ta.sma(close, fastLen);
let slow = ta.sma(close, slowLen);

// ④ 检测金叉和死叉事件。
//   ta.cross_over(a, b)  → 在 a 向上穿越 b 的那根 Bar 返回 true
//   ta.cross_under(a, b) → 在 a 向下穿越 b 的那根 Bar 返回 true
let crossUp   = ta.cross_over(fast, slow);
let crossDown = ta.cross_under(fast, slow);

// ⑤ 将两条均线绘制为连续折线。
//   linewidth=2 使线条略粗于默认值 1。
plot(fast, title:  "Fast SMA", color:  color.BLUE,   linewidth:  2);
plot(slow, title:  "Slow SMA", color:  color.ORANGE, linewidth:  2);

// ⑥ 在金叉 Bar 的下方绘制向上的三角形标记。
//   plot_shape 仅在第一个参数为 true 的 Bar 上绘制。
plot_shape(crossUp,
    title:  "Bullish Cross",
    style:  Shape.TriangleUp,
    location:  Location.BelowBar,
    color:  color.GREEN,
    size:  Size.Small);

// ⑦ 在死叉 Bar 的上方绘制向下的三角形标记。
plot_shape(crossDown,
    title:  "Bearish Cross",
    style:  Shape.TriangleDown,
    location:  Location.AboveBar,
    color:  color.RED,
    size:  Size.Small);

// ⑧ 在金叉或死叉 Bar 上为图表背景添加淡色高亮。
//   color.new(c, transp) 创建带透明度的颜色（0=不透明，100=完全透明）。
//   三元运算符 ?: 根据事件类型选择颜色。
let bgColor = crossUp   ? color.new(color.GREEN, 85) :
              crossDown ? color.new(color.RED,   85) : na;
bg_color(bgColor);
```

### 涉及的核心概念

| 概念 | 位置 |
|---|---|
| 脚本声明 | `indicator(...)` — 行 ① |
| 用户输入 | `input.int` — 行 ② |
| `series<float>` 变量 | `fast`、`slow`、`crossUp`、`crossDown` — 行 ③④ |
| `ta` 模块 | `ta.sma`、`ta.cross_over`、`ta.cross_under` — 行 ③④ |
| 绘制折线 | `plot(...)` — 行 ⑤ |
| 绘制形状标记 | `plot_shape(...)` — 行 ⑥⑦ |
| 透明颜色 | `color.new(c, transp)` — 行 ⑧ |
| 三元运算符 | `c ? a : b` — 行 ⑧ |
| `na` 表示"无值" | `na` 用于跳过背景着色 — 行 ⑧ |

---

## 示例二 — 布林带策略

该策略在收盘价向上突破上轨时做多，跌回中轨以下时平多；反之，向下突破下轨时做空，反弹回中轨以上时平空。涉及 `strategy()`、`ta.bb`、元组解构、历史运算符和 `strategy.entry` / `strategy.close` 等特性。

- [布林带（Bollinger Bands）](https://en.wikipedia.org/wiki/Bollinger_Bands)

```navi
// ① 将此脚本声明为策略。
// - default_qty_type  : 使用固定数量（合约/股数）
// - default_qty_value : 每笔交易默认 1 手
strategy(
    "Bollinger Bands Breakout",
    default_qty_type:  DefaultQtyType.Fixed,
    default_qty_value:  1
);

// ② 计算布林带。
// ta.bb 返回一个元组：(中轨, 上轨, 下轨)。
// let (a, b, c) = ... 语法将元组解构为三个变量。
let (basis, upper, lower) = ta.bb(close, 20, 2.0);

// ③ 入场条件。
// close[1] 引用*上一根* Bar 的收盘价（历史运算符 []）。
// 结合当前 Bar 与上一 Bar 的值，可精确定位价格穿越轨道的那根 Bar。
let longEntry  = close > upper and close[1] <= upper[1];
let shortEntry = close < lower and close[1] >= lower[1];

// ④ 出场条件：价格穿越中轨。
let longExit  = close < basis;
let shortExit = close > basis;

// ⑤ 发出策略指令。
// strategy.entry 开仓；strategy.close 按交易 ID 平仓。
if longEntry {
    strategy.entry("Long", Direction.Long);
}
if shortEntry {
    strategy.entry("Short", Direction.Short);
}

if longExit {
    strategy.close("Long");
}
if shortExit {
    strategy.close("Short");
}
```

### 涉及的核心概念

| 概念 | 位置 |
|---|---|
| 策略声明 | `strategy(...)` — 行 ① |
| 元组解构 | `let (basis, upper, lower) = ta.bb(...)` — 行 ② |
| `ta.bb` | 布林带计算 — 行 ② |
| 历史运算符 `[]` | `close[1]`、`upper[1]` — 行 ③ |
| 布尔 series | `longEntry`、`shortEntry`、`longExit`、`shortExit` — 行 ③④ |
| `if` 语句 | 策略指令块 — 行 ⑤ |
| `strategy.entry` / `strategy.close` | 开仓与平仓 — 行 ⑤ |

---

## 延伸阅读

- [语言基础](/zh-CN/docs/language-basics) — 运算符、字面量、历史运算符
- [变量与限定符](/zh-CN/docs/types-and-variables) — `var`、类型限定符、`na`
- [控制结构](/zh-CN/docs/control-structures) — `if`、`for`、`while`、`switch`
- [函数与方法](/zh-CN/docs/functions-and-methods) — 函数的定义与调用
- [标准库](/zh-CN/api/stdlib/) — `ta`、`math`、`str`、`strategy` 等
