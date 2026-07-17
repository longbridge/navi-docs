# 快速开始

开始前，请先[选择并配置 Navi 的使用方式](/zh-CN/docs/install)。本指南使用 Longbridge CLI 和行情数据运行脚本，并将独立的 `navi` CLI 作为可选的本地开发检查工具。

## 编写第一个指标

创建 `sma.nv`：

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: Color.BLUE);
```

<QuickStartSmaChart />

蓝色线是该指标基于 AAPL 日 K 线计算出的 14 周期简单移动平均线。该脚本已使用 `navi run` 和同一份 OHLCV 数据实际执行。

## 本地检查（可选）

如果已安装用于开发的独立 `navi` CLI，可以在运行脚本前进行验证：

```bash
navi lint sma.nv
```

`lint` 会检查语法、类型、编译、导入和规范格式。独立 CLI 不包含行情数据。要验证运行行为，请准备 OHLCV CSV；模拟 K 线即可，但应覆盖脚本的回看周期和关键分支。然后执行：

```bash
navi run sma.nv --data bars.csv --symbol NASDAQ:AAPL --timeframe 1D
```

CSV 必须包含 `time,open,high,low,close`，可选包含 `volume` 和 `turnover`；`time` 使用 Unix 毫秒。运行 `navi run --help` 可查看当前 CSV 格式和所有选项。

需要真实 K 线时，已安装并登录的 Longbridge CLI 可以输出 JSON：

```bash
longbridge kline history AAPL.US \
  --start 2024-01-01 \
  --end 2024-12-31 \
  --format json
```

将返回的 OHLCV 字段转换为上述 CSV 格式即可。AI 环境若提供 Longbridge MCP，也可以通过其行情工具请求历史 K 线。两者均不可用时，可使用可靠的公开数据源，并核对授权、复权方式、时区、排序及缺失 K 线处理方式。

## 使用 Longbridge 运行

通过 Longbridge CLI 使用历史行情数据运行指标：

```bash
cat sma.nv | longbridge quant run AAPL.US \
  --start 2024-01-01 \
  --end 2024-12-31
```

数据周期、输入参数、输出格式和回测选项请参阅 [`longbridge quant run` 文档](https://open.longbridge.com/docs/cli/quant)。同一个脚本也可以在 Longbridge App 或桌面端中交互式使用。

## 编写策略

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

使用 500 根 AAPL 日 K 线运行该示例，CLI 输出为：

```text
ran 500 bars; plots: 2; trades: 0 ; net profit: 0
```

## 运行 PineScript 文件 <Badge type="warning" text="experimental" />

`navi` CLI 兼容 PineScript v6 语法。将脚本保存为 `.pine` 文件并传入全局 `--pine` 参数，即可直接编译或运行：

```bash
navi check my_indicator.pine --pine
navi run my_indicator.pine \
  --data bars.csv \
  --symbol NASDAQ:AAPL \
  --timeframe 1D \
  --pine
```

`.pine` 入口文件必须使用 `--pine` 参数；未传入该参数时，本地 CLI 接受 Navi `.nv` 文件。

### 转换为 Navi

下面两个示例都计算布林带。PineScript 填充上下轨区域，紧凑的 Navi 版本则使用趋势变色中轨和简洁的区间边界。

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

- [语言基础](/zh-CN/docs/language-basics)
- [标准库](/zh-CN/api/stdlib/)
