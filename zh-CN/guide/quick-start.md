# 快速开始

Navi 脚本通过 `longbridge` CLI 在 Longbridge 平台上运行。

## 安装 Longbridge CLI

请参阅[安装指南](https://open.longbridge.com/docs/cli/install)。[`longbridge quant` 命令](https://open.longbridge.com/docs/cli/quant)用于对历史数据运行 Navi 或 Pine Script 脚本。

## 编写第一个指标

创建 `sma.nv`：

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: color.ORANGE);
```

## 对历史数据运行

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script sma.nv
```

也可以直接通过管道传入脚本：

```bash
cat sma.nv | longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31
```

默认以表格形式输出每根 K 线的值。使用 `--format json` 可获取结构化输出。

## 编写策略

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

## 运行 Pine Script 文件

使用 `--dialect pine` 参数可直接运行已有的 Pine Script 文件，无需修改任何代码：

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script my_indicator.pine --dialect pine
```

`--dialect` 参数用于指定脚本语言：

| 值 | 语言 |
|---|---|
| `navi` | Navi（`.nv` 文件的默认值） |
| `pine` | Pine Script V6（`.pine` 文件的默认值） |

如果文件使用了正确的扩展名（`.nv` 或 `.pine`），语言会自动识别，无需手动指定 `--dialect`。

### 转换为 Navi

新脚本建议使用 Navi（`.nv`），可获得完整的编辑器支持。下面是同一个布林带指标分别用两种语言编写的对比：

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

- [语言基础](/zh-CN/guide/language-basics)
- [标准库](/zh-CN/api/stdlib/)
