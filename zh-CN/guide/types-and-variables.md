# 类型与变量

## 变量声明

变量可以使用显式或推断类型声明：

```navi
// 类型推断
let a = 10;                // 推断为 int
let name = "AAPL";         // 推断为 string

// 显式类型
let b: float = 3.14;
let label: string = "Buy";
let flag: bool = true;
```

如果无法推断类型，则需要显式注解：

```navi
let a = na;                // 错误：无法推断变量类型
let a: float = na;         // OK
```

## 重新赋值

使用 `=` 重新赋值变量。也支持复合赋值运算符：

```navi
let a = 10;
a = 20;    // 重新赋值
a += 5;    // a = a + 5
a -= 1;    // a = a - 1
a *= 2;    // a = a * 2
a /= 3;    // a = a / 3
a %= 4;    // a = a % 4
```

## 类型限定符

Navi 有四个类型限定符，描述值何时已知，从最严格到最宽松：

| 限定符 | 含义 |
|---|---|
| `const` | 编译时已知，永不改变 |
| `input` | 脚本启动时已知（如用户输入） |
| `simple` | 在第 0 根 K 线时已知，每根 K 线相同 |
| `series` | 每根 K 线都可能变化 |

```navi
let a: const int = 2;
let b: input int = 10;
let c: simple int = a + b;
let d: series float = close;
```

限定符层级为：`const` -> `input` -> `simple` -> `series`。值可以沿此层级自动提升，但不能降级。

## `var` — 初始化一次，跨 K 线保持

没有声明模式的变量在**每次脚本执行时**（每根 K 线、每个 tick）都会重新初始化。`var` 关键字改变了这一点 — 变量**仅在第一根 K 线时初始化一次**，并在后续所有 K 线上保留其最后赋值：

```navi
indicator("Green Bars Count");
var count = 0;
let isGreen = close >= open;
if isGreen {
    count = count + 1;
}
plot(count);
```

没有 `var`，`count` 会在每根 K 线上重置为 `0`，所以绘图只会显示 `0` 或 `1`。有了 `var`，值会在各 K 线之间累积。

### `var` 在 `if` 块中

`var` 可以在 `if` 块中使用。变量在**首次进入该块的执行时**初始化：

```navi
var a = close;
var b = 0.0;
if close > open {
    var x = close; // 当此分支首次执行时初始化一次
    b = x;
}
```

### `var` 与集合

`var` 适用于所有类型，包括数组和对象。`var` 数组会在各 K 线之间持续存在并增长：

```navi
var a = Array.new<float>(0);
a.push(close);      // 每根 K 线数组增长 1 个元素
```

### `var` 的实时行为

在历史 K 线上，`var` 和非 `var` 行为相同，因为脚本每根 K 线只执行一次。差异在**实时 K 线**上可见：没有 `var`，变量在每个 tick 时重置；有 `var`，变量在 tick 之间保留值，但会受到**回滚**的影响（当 K 线确认时，值恢复到上一根已确认 K 线的状态，然后为新的已确认 K 线重新执行一次）。

## `varip` — 无回滚持久化

`varip`（var intrabar persist）类似于 `var` — 仅初始化一次。关键区别是 `varip` 变量在实时 K 线上**不受回滚影响**。它们在所有执行中保留值，包括同一未确认 K 线内的多个 tick：

```navi
indicator("varip demo");
varip updateCount: int = na;
if barstate.is_new {
    updateCount = 1;
} else {
    updateCount = updateCount + 1;
}
plot(updateCount, style: PlotStyle.Circles);
```

这对追踪 tick 级别的数据很有用。在历史 K 线上，`varip` 的行为与 `var` 相同。

### `varip` 用于类型字段

`varip` 可以用于单个类型字段，使其在 K 线内更新间持久化，而其他字段仍然会回滚：

```navi
struct Counter {
    int bars = 0,
    varip int ticks = 0,
}

var counter: Counter = Counter.new();
counter.bars += 1; // 在未确认 K 线上会回滚
counter.ticks += 1; // 不会回滚
```

### 对比表

| 行为 | 无关键字 | `var` | `varip` |
|---|---|---|---|
| 初始化 | 每次执行 | 一次（第一根 K 线） | 一次（第一根 K 线） |
| 历史 K 线 | 每根 K 线重新初始化 | 持久化 | 持久化 |
| 实时 tick | 每个 tick 重新初始化 | 持久化（有回滚） | 持久化（无回滚） |

## 元组解构

返回元组的函数可以使用 `(...)` 语法解构：

```navi
let (median, upperBand, lowerBand) = ta.bb(close, 20, 2.0);
plot(median);
plot(upperBand);
plot(lowerBand);
```

## 丢弃（`_`）

使用 `_` 丢弃不需要的值。它可以多次使用：

```navi
let (_, upper, _) = ta.bb(close, 20, 2.0);

let _ = someFunction();      // 丢弃返回值
let _ = anotherFunction();
```

## `na` — 缺失值

`na` 表示缺失或未定义的值。当数据不足时，许多函数会返回 `na`：

```navi
let sma5 = ta.sma(close, 5); // 前 4 根 K 线为 na

// 使用 na() 检测 na
if not na(sma5) {
    label.new(bar_index, sma5, str.tostring(sma5));
}
```

使用 `nz()` 将 `na` 替换为默认值：

```navi
let value = nz(ta.sma(close, 5), 0.0);  // 将 na 替换为 0
```

使用 `fixnan()` 将 `na` 替换为最后一个非 na 值：

```navi
let value = fixnan(ta.sma(close, 5));
```

## 下一步

- [控制结构](/zh-CN/guide/control-structures) — if、for、while、switch
- [函数与方法](/zh-CN/guide/functions-and-methods) — 定义和调用函数
