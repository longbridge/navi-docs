# 文档注解

Navi 支持特殊注释标签来为声明附加文档。这些注解被 LSP（用于悬停提示和补全）和文档生成器使用。

支持 `//@tag` 和 `// @tag`（`//` 后有空格）两种格式。

## 可用标签

| 标签 | 位置 | 描述 |
|-----|-----------|-------------|
| `@description` | 文件头部（任何声明之前） | 为库添加顶层描述 |
| `@function` | 函数声明上方 | 为函数添加自定义描述 |
| `@param` | 函数声明上方 | 为参数添加描述。指定参数名称，然后是描述 |
| `@returns` | 函数声明上方 | 为返回值添加描述 |
| `@type` | 类型或 newtype 声明上方 | 为类型添加自定义描述 |
| `@enum` | 枚举声明上方 | 为枚举添加自定义描述 |
| `@field` | 类型或枚举声明上方 | 为字段或变体添加描述。指定字段名称，然后是描述 |
| `@variable` | 变量声明上方 | 为变量添加自定义描述 |
| `@example` | 函数或类型声明上方 | 开启一个代码示例块（由 `@endexample` 关闭） |
| `@endexample` | 关闭 `@example` 块 | — |

所有标签支持**多行续写**：紧跟在标签行之后以 `//` 开头（不带 `@` 标签）的行会被追加到该标签的文本中。

## 文档化函数

使用 `@function`、`@param` 和 `@returns` 来文档化函数声明：

```navi
//@function Outputs a label with `labelText` on the bar's high.
//@param labelText (series string) The text to display on the label.
//@returns The drawn label ID.
export fn drawLabel(labelText: string) {
    label.new(bar_index, high, text: labelText);
}
```

`@param` 和 `@returns` 可以出现在 `@function` 标签之前或之后：

```navi
//@param series Series of values to process.
//@param length Number of bars (length).
//@function Arnaud Legoux Moving Average.
//
// It uses Gaussian distribution as weights for moving average.
export fn alma(series: series float, length: simple int): series float {
    _
}
// ...
```

### 多行描述

续写行（以 `//` 开头但不带 `@`）会扩展前一个标签的描述：

```navi
//@function Calculates the percentage difference
// from the base price to the target price.
//@param basePrice The start price
// used as the reference point.
//@param price The end price.
//@returns The signed deviation percentage.
export fn calcDeviation(basePrice: float, price: float) {
    100 * (price - basePrice) / basePrice;
}
```

## 文档化类型

使用 `@type` 和 `@field` 来文档化类型声明：

```navi
//@type A point on a chart.
//@field index The index of the bar where the point is located, i.e., its `x`
//             coordinate.
//@field price The price where the point is located, i.e., its `y` coordinate.
struct Point {
    index: int,
    price: float,
}
```

`@type` 标签也适用于 newtype 声明：

```navi
//@type Handle for a label drawing object.
export type label = int;
```

## 文档化枚举

使用 `@enum` 和 `@field` 来文档化枚举声明及其变体：

```navi
//@enum Represents a trading direction.
//@field Long  A long (buy) direction.
//@field Short A short (sell) direction.
//@field Both  Both directions.
export enum Direction {
    Long,
    Short,
    Both,
}
```

## 文档化变量

使用 `@variable` 来文档化变量声明：

```navi
//@variable The highest price over the last 20 bars.
let highest20: float = ta.highest(high, 20);

//@variable Tracks cumulative volume since the session started.
var cumVol: float = 0.0;
```

## 代码示例

使用 `@example` / `@endexample` 对为函数或类型附加可运行的代码示例。块内每行是普通的 `//` 注释，`// `（含空格）前缀会自动剥离。允许多个块，每个块成为一个独立的示例。

```navi
//@function 计算两个价格之间的百分比偏差。
//@param base  参考价格。
//@param price 目标价格。
//@returns 带符号的偏差百分比。
//@example
// // 将今日收盘价与昨日收盘价比较
// let deviation = calcDeviation(close[1], close);
// plot(deviation, title: "偏差 %");
//@endexample
export fn calcDeviation(base: float, price: float) {
    100 * (price - base) / base
}
```

多个示例分别用独立的块包裹：

```navi
//@function 返回 `src` 在 `length` 根 K 线上的简单移动平均值。
//@example
// // 基本的 20 根 K 线 SMA
// plot(ta.sma(close, 20));
//@endexample
//@example
// // 使用两条 SMA 的交叉信号
// let fast = ta.sma(close, 9);
// let slow = ta.sma(close, 21);
// plot_shape(ta.cross_over(fast, slow), style: Shape.LabelUp);
//@endexample
export series float sma(series float src, simple int length) => ...
```

示例会显示在 VS Code 的 **LSP 悬停提示**中。

## 交叉引用链接

在任何描述文本中，可以用 `` [`name`] `` 语法创建指向其他符号的交叉引用链接。在 API 参考对话框和生成的文档页面中，这些链接会渲染为可点击的导航链接。

```navi
//@type Handle for a plot created by [`func:plot`].
export type plot = int;
//@function Fills the area between two [`func:plot`] handles.
//@param hline1 The first horizontal line handle (from [`func:hline`]).
//@returns An hline handle that can be used with [`fill`].
```

**语法：**

| 语法 | 解析目标 |
|------|---------|
| `` [`fill`] `` | 当前模块的 `fill`，或 prelude 的 `fill`，或全局搜索 |
| `` [`BarmergeGaps.Off`] `` | `BarmergeGaps.Off`（枚举成员） |
| `` [`LineStyle.Solid`] `` | `LineStyle` 枚举的 `Solid` 变体（链接到枚举类型） |
| `` [`variant:LineStyle.Solid`] `` | 显式指定枚举变体（目标相同，语义更明确） |
| `` [`func:plot`] `` | `plot` **函数**（排除 `plot` 类型） |
| `` [`type:hline`] `` | `hline` **类型**（排除 `hline` 函数） |
| `` [`enum:LineStyle`] `` | 名为 `LineStyle` 的枚举 |

限定符前缀（`func`、`type`、`enum`）用于区分同一模块中同名的函数和类型。

对于带点的引用，解析器首先检查左侧是否为**模块**并以右侧作为成员名查找；未找到时再检查左侧是否为**枚举类型**且右侧为其变体名——此时链接将导航到对应的枚举类型。因此 `` [`BarmergeGaps.Off`] ``（枚举变体）和 `` [`LineStyle.Solid`] ``（枚举变体）都能正确解析。

## 编辑器支持

当存在文档注解时，Navi LSP 使用它们提供：

- **悬停信息** — 悬停在符号上时显示描述、参数、返回值和字段文档
- **补全详情** — 在自动补全建议中显示摘要
- **文档符号** — 在大纲视图中包含摘要

## 库文档

对于导出的库，文档注解尤其重要。文档生成器（`navi-docgen`）提取这些注解来生成 API 参考页面。

使用 `@description` 在文件头部为库本身添加顶层描述。它必须出现在任何声明之前：

```navi
//@description 提供用于计算波动率区间的工具函数。
//
// 包含可自定义的布林带和肯特纳通道。
library("MyLib");
```

完整示例：

```navi
library("MyLib");

//@type Configuration for a custom indicator.
//@field length     The lookback period.
//@field multiplier The standard deviation multiplier.
export struct Config {
    length: int = 14,
    multiplier: float = 2.0,
}

//@function Calculates a custom band around a moving average.
//@param src    The source series.
//@param config The indicator configuration.
//@returns The upper band value.
export fn upperBand(src: series float, config: Config) {
    let basis = ta.sma(src, config.length);
    basis + config.multiplier * ta.stdev(src, config.length);
}
```
