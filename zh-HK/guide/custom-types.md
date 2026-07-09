# 自訂類型與枚舉

## 使用者定義類型（UDT）

使用 `struct` 關鍵字定義自訂類型。欄位必須有顯式類型，可以有可選的預設值：

```navi
struct Order {
    int id,
    string symbol,
    float price = na;
    varip int updateCount = 0;
}
```

欄位可以使用：
- 顯式類型（必需）
- 可選的預設值，使用 `=`
- 可選的 `varip` 聲明模式（使欄位在 K 線內更新間持久化）

### 建立實例

使用 `.new()` 建立實例：

```navi
Order myOrder = Order.new(id:  1, symbol:  "AAPL")
```

### 存取和修改欄位

```navi
orderPrice = myOrder.price
myOrder.price := 155.0
myOrder.quantity := 200
```

### 複製

```navi
Order clone = Order.copy(myOrder)
clone.price := 160.0
```

### 類型上的方法

```navi
struct Position {
    float entry,
    float size,
    bool isLong = true;
}

method pnl(self: Position, currentPrice: float) {
    let diff = currentPrice - self.entry;
    self.isLong ? diff * self.size : -diff * self.size
}

method isProfit(self: Position, currentPrice: float) {
    self.pnl(currentPrice) > 0
}

let pos = Position.new(entry:  100.0, size:  10.0);
if pos.isProfit(close) {
    label.new(bar_index, high, str.tostring(pos.pnl(close), "#.##"))
}
```

### `varip` 用於類型欄位

單個欄位可以使用 `varip` 在 K 線內更新間持久化，而其他欄位仍然會回滾：

```navi
struct Counter {
    int bars = 0;
    varip int ticks = 0;
}

var counter: Counter = Counter.new();
counter.bars += 1; // 在未確認 K 線上會回滾
counter.ticks += 1; // 不會回滾
```

### 泛型 UDT

UDT 可以宣告一個或多個類型參數。實例化時，參數名代表任意具體類型：

```navi
struct Pair<A, B> {
    A first,
    B second,
}

let p: Pair<int, string> = Pair.new(first: 42, second: "hello");
```

欄位類型本身也可以含有類型參數，例如持有 `T` 的集合：

```navi
struct Stack<T> {
    Array<T> items,
    int count = 0,
}

method push<T>(self: Stack<T>, value: T) {
    self.items.push(value);
    self.count += 1;
}

method pop<T>(self: Stack<T>): T {
    self.count -= 1;
    self.items.pop()
}

var s: Stack<float> = Stack.new();
s.push(close);
s.push(open);
```

編譯器會對每種實例化進行單態化處理——`Stack<float>` 和 `Stack<int>` 會生成獨立的、類型正確的物件，參考類型欄位的 GC 追蹤也會自動設定。

## 枚舉

使用 `enum` 關鍵字定義枚舉。枚舉變體是簡單的名稱（沒有關聯資料）：

```navi
enum Direction {
    Long,
    Short,
    Both:  "Both Directions",
}
```

### 使用枚舉

透過枚舉名稱存取變體：

```navi
let d: Direction = Direction.Long;

if d == Direction.Long {
    strategy.entry("L", strategy.long)
} else if d == Direction.Short {
    strategy.entry("S", strategy.short)
}
```

## 匯入和匯出

### 匯出

使用 `export` 標記函式、類型和枚舉，使它們對匯入模組可見：

```navi
library("MyLib");

export struct Config {
    int length,
    float multiplier,
}

export fn calcSMA(src: series float, length: simple int) {
    ta.sma(src, length)
}

export enum Side {
    left,
    right,
}
```

### 匯入

```navi
indicator("My Indicator");
use MyLib.nv as lib;

let config = lib.Config.new(length: 20, multiplier: 2.0);
let sma = lib.calcSMA(close, config.length);
plot(sma);
```

透過模組名稱存取匯出的成員：

```navi
use utils.nv;
utils.add(1, 2);                  // 呼叫匯出的函式
let obj: utils.MyType = na;       // 使用匯出的類型
let value = utils.MyEnum.A;       // 存取匯出的枚舉變體
```

## 新類型宣告

Navi 支援 `type Name => underlying_type` 語法來建立由現有類型支援的不同類型。這允許在不建立新結構的情況下定義特定領域的類型：

```navi
type MyInt = int;
let a: MyInt = 10; // 接受底層類型的值
```

新類型可以分層：

```navi
type MyInt = int;
type SpecialInt = MyInt;
let x: SpecialInt = 42; // OK
```

標準函式庫廣泛使用新類型來為繪圖物件和繪圖樣式建立不同的類型：

```navi
// prelude/draw.1.nv
export type plot_style = int;
export type hline = int;
export type label = int;
export type line = int;
export type box = int;
export type table = int;
```

## 編譯器特殊類型

以下類型由 Navi 標準函式庫用於實作某些進階內建函式。通常情況下，您不會在自己的腳本中直接使用它們——它們出現在標準函式庫源碼中，當您呼叫 `input.source`、`request.security` 或 `max_bars_back` 等函式時會被透明處理。

### `expression`

允許函式接收**未求值的 AST 節點**而非計算後的值。`input.source()` 用它來取得使用者傳入的是哪個變數，從而在 UI 中以變數名稱顯示。

```navi
let src = input.source(defval:  close);
// `close` 被捕獲為表達式，不會被求值為數字。
// 設定 UI 會將「Close」顯示為預設來源選項。
```

### `instructions<T>`

允許函式接收**已編譯的程式碼區塊**，並在不同上下文中重新執行。`request.security()` 用它在不同標的或時間週期中執行表達式。

```navi
// 簡單序列——每根 bar 在 AAPL/1D 上下文中重新求值：
let aapl_close = request.security("AAPL", "1D", close);

// 複合表達式——整個表達式在上下文中重新執行：
let aapl_sma = request.security("AAPL", "1D", ta.sma(close, 14));
```

### `variableref`

允許函式接收**變數或序列的編譯期參考**。編譯器在編譯時解析該參考，並將變數的元資料傳遞給原生函式。`max_bars_back()` 用它為特定序列擴展歷史緩衝區。

```navi
// 為內建序列擴展歷史緩衝區：
max_bars_back(close, 500);

// 或為使用者自訂序列變數：
let myAvg: series float = ta.sma(close, 20);
max_bars_back(myAvg, 200);
```

## 下一步

- [函式與方法](/zh-HK/guide/functions-and-methods) — 函式定義、靜態方法、運算子多載等
- [標準函式庫](/zh-HK/api/stdlib/) — 探索內建函式
