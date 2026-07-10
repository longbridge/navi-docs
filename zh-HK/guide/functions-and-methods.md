# 函數與方法

## 函數定義

所有函數都使用花括號塊。函數體的最後一個運算式是返回值——沒有 `return` 關鍵字：

```navi
fn double(x) {
    x * 2;
}

fn smaCustom(src, length) {
    let sum = 0.0;
    for i = 0 to length - 1 {
        sum += src[i];
    }
    sum / length;
}
```

### 返回元組的函數

```navi
fn calcBands(src, length, mult) {
    let basis = ta.sma(src, length);
    let dev = mult * ta.stdev(src, length);
    (basis, basis + dev, basis - dev);
}

let (mid, upper, lower) = calcBands(close, 20, 2.0);
```

> **注意：** 在 Navi 中，元組只能作為函式返回值使用，且必須在賦值時立即解構。元組不能存儲在變數中、作為參數傳遞，也不能用於其他表達式中。

### 預設參數

```navi
fn myPlot(src, length:  14, title:  "Default") {
    let sma = ta.sma(src, length);
    plot(sma, title);
    sma;
}
```

### 命名參數

調用函數時可以使用命名參數：

```navi
plot(close, title: "Close", color: color.BLUE, linewidth: 2);
```

## 函數重載

多個函數可以共享相同的名稱，只要參數類型不同：

```navi
fn format(x: int) {
    str.tostring(x);
}
fn format(x: float) {
    str.tostring(x, "#.##");
}
fn format(x: string) {
    x;
}
```

## 方法

方法是第一個參數為接收者（`self`）的函數。可以使用點語法調用：

```navi
method double(self: int) {
    self * 2;
}

let x = 5;
x.double(); // 10
```

方法可以用於自訂類型：

```navi
struct Position {
    entry: float,
    size: float,
}

method pnl(self: Position, currentPrice: float) {
    (currentPrice - self.entry) * self.size;
}

method isProfit(self: Position, currentPrice: float) {
    self.pnl(currentPrice) > 0;
}

let pos = Position.new(entry: 100.0, size: 10.0);
if pos.isProfit(close) {
    label.new(bar_index, high, str.tostring(pos.pnl(close), "#.##"));
}
```

## 禁止遞迴調用

Navi **不允許遞迴**。函數不能直接或透過其他函數間接調用自身。編譯器在編譯時拒絕任何調用循環：

```navi
// 錯誤 — 不允許直接遞迴
fn factorial(n) {
    n <= 1 ? 1 : n * factorial(n - 1);
}

// 錯誤 — 間接遞迴也會被拒絕
fn isEven(n) {
    n == 0 ? true : isOdd(n - 1);
}
fn isOdd(n) {
    n == 0 ? false : isEven(n - 1);
}
```

這是語言的基本約束，不是實現限制。請使用 `for` 或 `while` 迴圈進行迭代計算：

```navi
fn factorial(n) {
    let result = 1;
    for i = 2 to n {
        result *= i;
    }
    result;
}
```

## 明確的返回類型

Navi 支援在函式名前標註返回型別以進行更嚴格的型別檢查：

```navi
fn greet(name: string): string {
    "Hello, " + name;
}

fn average(a: float, b: float): float {
    (a + b) / 2.0;
}
```

這也適用於方法：

```navi
method isPositive(self: float): bool {
    self > 0;
}
```

## 泛型函式

Navi 允許在函式名後用 `<...>` 宣告型別參數：

```navi
fn identity<T>(value: T) {
    value;
}
fn first<T>(arr: Array<T>) {
    arr.get(0);
}
```

## 可變參數

Navi 允許最後一個參數使用 `...` 宣告為可變參數：

```navi
fn sum(first: int, rest: int...) {
    first + rest;
}
```

可變參數必須是參數列表中的最後一個。

## 屬性（property）

`property` 關鍵字宣告一個不能有參數且不帶括號呼叫的函式，使其看起來像一個屬性：

```navi
property size() {
    42;
}

// 作為變數存取 — 不帶括號：
let value = size; // 42

// 帶括號呼叫會出錯：
let value = size(); // error: function `size` not defined
```

**標準函式庫中的示例：**

```navi
// 燭形資料（prelude/candlestick.1.nv）
export property open(): series float {
    @native.candlestick(1);
}
export property close(): series float {
    @native.candlestick(4);
}
export property hl2(): series float {
    (high + low) / 2;
}

// 常數（stdlib/math.1.nv）
export property pi(): const float {
    3.1415926535897932;
}
```

## 類型上的靜態方法

`staticmethod` 關鍵字為特定物件類型定義靜態方法。靜態方法在類型本身上呼叫，而不是在實例上：

```navi
struct AB {
    a: int,
}

staticmethod(AB) add(a: int, b: int): int {
    a + b;
}

// 在類型名上呼叫：
let result = AB.add(20, 5); // 25
```

**標準函式庫中的示例：**

```navi
// chart.point 的工廠方法（stdlib/chart.1.nv）
export struct point {
    index: int,
    time: int,
    price: float,
}

export staticmethod(point) now(price: float = close): point {
    point.new(bar_index, time_now, price);
}

export staticmethod(point) from_time(time: int, price: float): point {
    point.new(na, time, price);
}
```

這些被呼叫為 `chart.point.now()` 和 `chart.point.from_time(time, price)`。

## 類型上的靜態屬性

`staticproperty` 關鍵字與 `staticmethod` 類似，但訪問器不接受參數，且引用時**不加括號**——與普通 `property` 相同：

```navi
struct Counter {
    value: int,
}

staticproperty(Counter) zero(): Counter {
    Counter.new();
}

// 不帶括號訪問：
let c = Counter.zero;
```

`staticproperty` 只能為 **struct 或 newtype** 類型定義，不能用於列舉或原始類型。`staticmethod` 也遵循同樣的規則。

| | `staticmethod` | `staticproperty` |
|---|---|---|
| 參數 | 有 | 無 |
| 呼叫語法 | `Type.name(args)` | `Type.name` |

## 運算子多載

`operator` 關鍵字為使用者定義的類型定義自訂算術運算子行為：

```navi
struct Vec2 {
    x: float,
    y: float,
}

operator+(a: Vec2, b: Vec2): Vec2 {
    Vec2.new(a.x + b.x, a.y + b.y);
}

operator-(a: Vec2, b: Vec2): Vec2 {
    Vec2.new(a.x - b.x, a.y - b.y);
}

// 現在可以自然地使用運算子：
let a: Vec2 = Vec2.new(1, 2);
let b: Vec2 = Vec2.new(3, 4);
let c: Vec2 = a + b; // Vec2.new(4, 6)
```

支援的運算子：`+`、`-`、`*`、`/`（`operator` 和符號之間沒有空格）。允許為不同的操作數類型進行多個多載。

## 內建函數

Navi 提供了許多內建函數：

```navi
// 繪圖
plot(close, "Close", color.BLUE);
plot_shape(close > open, style:  Shape.TriangleUp);
bg_color(close > open ? color.new(color.GREEN, 90) : na);

// 技術分析
sma = ta.sma(close, 20);
ema = ta.ema(close, 12);
[macdLine, signal, hist] = ta.macd(close, 12, 26, 9);
rsi = ta.rsi(close, 14);

// 數學
rounded = math.round(close, 2);
maxVal = math.max(open, close);

// 字串操作
text = str.tostring(close, "#.##");

// 輸入
length = input.int(14, "RSI Length", minval:  1);
src = input.source(close, "Source");
```

## 下一步

- [自訂類型與枚舉](/zh-HK/guide/custom-types) — 使用者定義類型、枚舉和新型別宣告
- [標準函式庫](/zh-HK/api/stdlib/) — 探索標準函式庫
