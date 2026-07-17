# 控制結構

Navi 中所有控制結構都是**運算式** — 它們會產生一個值。在執行的分支或迭代中最後計算的運算式就是返回值。這意味着 `if`、`for`、`while` 和 `switch` 都可以出現在賦值的右側。

## `if` / `else if` / `else`

```navi
if close > open {
    label.new(bar_index, high, "Bullish");
} else if close < open {
    label.new(bar_index, low, "Bearish");
} else {
    label.new(bar_index, close, "Doji");
}
```

### 從 `if` 返回值

每個分支的最後一個運算式就是結果。所有分支必須返回相同類型：

```navi
let x = if close > open {
    close;
} else {
    open;
};

plot(x);
```

使用 `else if`：

```navi
let x = if open > close {
    5;
} else if high > low {
    close;
} else {
    open;
};
```

當省略 `else` 塊時，條件為假時結果為 `na`（對於 bool/string 則為 `false` / `""`）：

```navi
let x = if close > open {
    close;
};
// 當 close <= open 時 x 為 na
```

### 從 `if` 返回元組

每個分支必須返回相同結構的元組：

```navi
let (v1, v2) = if close > open {
    (high, close);
} else {
    (close, low);
};
```

## `for` 迴圈

### 計數形式

```navi
let sum = 0.0;
for i = 0 to 9 {
    sum += close[i];
}
let averageClose = sum / 10;
```

指定步長：

```navi
for i = 0 to 20 by 2 {}
// i = 0, 2, 4, 6, ..., 20
```

反向迴圈（負步長）：

```navi
for i = 10 to 0 by -1 {
    arr.push(i);
}
// i = 10, 9, 8, ..., 0
```

### 集合迭代（`for...in`）

遍歷陣列，僅取得值，或同時取得索引和值：

```navi
var prices = Array.from(100.0, 200.0, 300.0);

// 僅取得值
for value in prices {
    log.info(str.tostring(value));
}

// 索引和值（解構）
for (index, value) in prices {
    log.info(str.tostring(index) + ": " + str.tostring(value));
}
```

### 從 `for` 返回值

`for` 迴圈返回最後一次迭代中最後計算的運算式。如果沒有迭代執行，則返回 `na`：

```navi
// 統計 OHLC 值中有多少大於 SMA
let ohlcValues: Array<float> = Array.from(open, high, low, close);
fn qtyGreaterThan(value, array) {
    let result: int = 0;
    for currentElement in array {
        if currentElement > value {
            result += 1;
        }
        result;
    }
}
plot(qtyGreaterThan(ta.sma(close, 20), ohlcValues));
```

## `while` 迴圈

```navi
let i = 0;
let sum = 0.0;
while i < 10 {
    sum += close[i];
    i += 1;
}
```

### 從 `while` 返回值

與 `for` 類似，`while` 迴圈返回最後一次迭代中最後計算的運算式：

```navi
let i: int = 0;
let result: int = while i < 10 {
    i += 1;
    i * 2;
};
// result 為 20（最後一次迭代：i = 10, 10 * 2 = 20）
```

## `break` 和 `continue`

- `break` 立即退出迴圈。迴圈返回 `break` 之前最後計算的運算式的值。
- `continue` 跳過當前迭代的其餘部分，繼續下一次迭代。

```navi
for i = 0 to 99 {
    if close[i] < 0 {
        break; // 退出迴圈
    } // 退出迴圈
    if na(close[i]) {
        continue; // 跳過此迭代
    } // 跳過此迭代
}
// 處理 close[i]
```

將 `break` 和 `continue` 與迴圈返回值配合使用：

```navi
let tempString: string = "";
let finalText: string = for number in randomArray {
    if number == 8 {
        break; // 退出迴圈；返回最後計算的運算式
    } else if number % 2 == 0 {
        continue; // 跳過偶數
    } // 跳過偶數
    tempString = tempString + str.tostring(number) + ", ";
};
// finalText 儲存迴圈終止後的返回值
```

## `switch`

### 帶值匹配

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

### 無值匹配（基於條件）

當沒有提供匹配運算式時，每個分支使用布林條件。第一個匹配的分支會執行：

```navi
let direction = switch {
    close > open => "up",
    close < open => "down",
    => "flat",
}; // 預設值
```

### 從 `switch` 返回元組

```navi
let (v1, v2) = switch {
    close > open => (high, close),
    => (close, low),
};
```

`switch` 分支使用 `=>` 分隔條件和主體。預設分支在 `=>` 之前沒有條件。

## 下一步

- [函數與方法](/zh-HK/docs/functions-and-methods) — 定義自訂函數
- [自訂類型與枚舉](/zh-HK/docs/custom-types) — 用戶定義類型
