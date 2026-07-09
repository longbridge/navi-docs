# 控制结构

Navi 中所有控制结构都是**表达式** — 它们会产生一个值。在执行的分支或迭代中最后计算的表达式就是返回值。这意味着 `if`、`for`、`while` 和 `switch` 都可以出现在赋值的右侧。

## `if` / `else if` / `else`

```navi
if close > open {
    label.new(bar_index, high, "Bullish")
} else if close < open {
    label.new(bar_index, low, "Bearish")
} else {
    label.new(bar_index, close, "Doji")
}
```

### 从 `if` 返回值

每个分支的最后一个表达式就是结果。所有分支必须返回相同类型：

```navi
let x = if close > open {
    close
} else {
    open
};

plot(x);
```

使用 `else if`：

```navi
let x = if open > close {
    5
} else if high > low {
    close
} else {
    open
};
```

当省略 `else` 块时，条件为假时结果为 `na`（对于 bool/string 则为 `false` / `""`）：

```navi
let x = if close > open {
    close
};
// 当 close <= open 时 x 为 na
```

### 从 `if` 返回元组

每个分支必须返回相同结构的元组：

```navi
let (v1, v2) = if close > open {
    (high, close)
} else {
    (close, low)
};
```

## `for` 循环

### 计数形式

```navi
let sum = 0.0;
for i = 0 to 9 {
    sum += close[i]
}
let averageClose = sum / 10;
```

指定步长：

```navi
for i = 0 to 20 by 2 {}
// i = 0, 2, 4, 6, ..., 20
```

反向循环（负步长）：

```navi
for i = 10 to 0 by -1 {
    array.push(arr, i)
}
// i = 10, 9, 8, ..., 0
```

### 集合迭代（`for...in`）

遍历数组，仅获取值，或同时获取索引和值：

```navi
var prices = array.from(100.0, 200.0, 300.0);

// 仅获取值
for value in prices {
    log.info(str.tostring(value))
}

// 索引和值（解构）
for (index, value) in prices {
    log.info(str.tostring(index) + ": " + str.tostring(value))
}
```

### 从 `for` 返回值

`for` 循环返回最后一次迭代中最后计算的表达式。如果没有迭代执行，则返回 `na`：

```navi
// 统计 OHLC 值中有多少大于 SMA
let ohlcValues: array<float> = array.from(open, high, low, close);
fn qtyGreaterThan(value, array) {
    let result: int = 0;
    for currentElement in array {
        if currentElement > value {
            result += 1
        }
        result
    }
}
plot(qtyGreaterThan(ta.sma(close, 20), ohlcValues));
```

## `while` 循环

```navi
let i = 0;
let sum = 0.0;
while i < 10 {
    sum += close[i];
    i += 1
}
```

### 从 `while` 返回值

与 `for` 类似，`while` 循环返回最后一次迭代中最后计算的表达式：

```navi
let i: int = 0;
let result: int = while i < 10 {
    i += 1;
    i * 2
};
// result 为 20（最后一次迭代：i = 10, 10 * 2 = 20）
```

## `break` 和 `continue`

- `break` 立即退出循环。循环返回 `break` 之前最后计算的表达式的值。
- `continue` 跳过当前迭代的其余部分，继续下一次迭代。

```navi
for i = 0 to 99 {
    if close[i] < 0 {
        break // 退出循环
    } // 退出循环
    if na(close[i]) {
        continue // 跳过此迭代
    } // 跳过此迭代
}
// 处理 close[i]
```

将 `break` 和 `continue` 与循环返回值配合使用：

```navi
let tempString: string = "";
let finalText: string = for number in randomArray {
    if number == 8 {
        break // 退出循环；返回最后计算的表达式
    } else if number % 2 == 0 {
        continue // 跳过偶数
    } // 跳过偶数
    tempString = tempString + str.tostring(number) + ", "
};
// finalText 保存循环终止后的返回值
```

## `switch`

### 带值匹配

匹配特定值：

```navi
let dayName = switch day_of_week {
    DayOfWeek.Monday => "Mon",
    DayOfWeek.Tuesday => "Tue",
    DayOfWeek.Wednesday => "Wed",
    DayOfWeek.Thursday => "Thu",
    DayOfWeek.Friday => "Fri",
    => "Weekend",
};
```

```navi
let i_maType: string = input.string(
    "EMA",
    "MA type",
    options:  [
        "EMA",
        "SMA",
        "RMA",
        "WMA"
    ]
);

let ma: float = switch i_maType {
    "EMA" => ta.ema(close, 10),
    "SMA" => ta.sma(close, 10),
    "RMA" => ta.rma(close, 10),
    => ta.wma(close, 10),
};
plot(ma);
```

### 无值匹配（基于条件）

当没有提供匹配表达式时，每个分支使用布尔条件。第一个匹配的分支会执行：

```navi
let direction = switch {
    close > open => "up",
    close < open => "down",
    => "flat",
}; // 默认值
```

### 从 `switch` 返回元组

```navi
let (v1, v2) = switch {
    close > open => (high, close),
    => (close, low),
};
```

`switch` 分支使用 `=>` 分隔条件和主体。默认分支在 `=>` 之前没有条件。

## 下一步

- [函数与方法](/zh-CN/guide/functions-and-methods) — 定义自定义函数
- [自定义类型与枚举](/zh-CN/guide/custom-types) — 用户定义类型
