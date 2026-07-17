# 變量與限定符

## 變數聲明

變數可以使用顯式或推斷類型聲明：

```navi
// 類型推斷
let a = 10;                // 推斷為 int
let name = "AAPL";         // 推斷為 string

// 顯式類型
let b: float = 3.14;
let label: string = "Buy";
let flag: bool = true;
```

如果無法推斷類型，則需要顯式註解：

```navi
let a = na;                // 錯誤：無法推斷變數類型
let a: float = na;         // OK
```

## 重新賦值

使用 `=` 重新賦值變數。也支援複合賦值運算子：

```navi
let a = 10;
a = 20;    // 重新賦值
a += 5;    // a = a + 5
a -= 1;    // a = a - 1
a *= 2;    // a = a * 2
a /= 3;    // a = a / 3
a %= 4;    // a = a % 4
```

## 類型限定符

Navi 有四個類型限定符，描述值何時已知，從最嚴格到最寬鬆：

| 限定符 | 含義 |
|---|---|
| `const` | 編譯時已知，永不改變 |
| `input` | 腳本啟動時已知（如用戶輸入） |
| `simple` | 在第 0 根 K 線時已知，每根 K 線相同 |
| `series` | 每根 K 線都可能變化 |

```navi
let a: const int = 2;
let b: input int = 10;
let c: simple int = a + b;
let d: series float = close;
```

限定符層級為：`const` -> `input` -> `simple` -> `series`。值可以沿此層級自動提升，但不能降級。

## `var` — 初始化一次，跨 K 線保持

沒有聲明模式的變數在**每次腳本執行時**（每根 K 線、每個 tick）都會重新初始化。`var` 關鍵字改變了這一點 — 變數**僅在第一根 K 線時初始化一次**，並在後續所有 K 線上保留其最後賦值：

```navi
indicator("Green Bars Count");
var count = 0;
let isGreen = close >= open;
if isGreen {
    count = count + 1;
}
plot(count);
```

沒有 `var`，`count` 會在每根 K 線上重置為 `0`，所以繪圖只會顯示 `0` 或 `1`。有了 `var`，值會在各 K 線之間累積。

### `var` 在 `if` 塊中

`var` 可以在 `if` 塊中使用。變數在**首次進入該塊的執行時**初始化：

```navi
var a = close;
var b = 0.0;
if close > open {
    var x = close; // 當此分支首次執行時初始化一次
    b = x;
}
```

### `var` 與集合

`var` 適用於所有類型，包括陣列和物件。`var` 陣列會在各 K 線之間持續存在並增長：

```navi
var a = Array.new<float>(0);
a.push(close);       // 每根 K 線陣列增長 1 個元素
```

### `var` 的即時行為

在歷史 K 線上，`var` 和非 `var` 行為相同，因為腳本每根 K 線只執行一次。差異在**即時 K 線**上可見：沒有 `var`，變數在每個 tick 時重置；有 `var`，變數在 tick 之間保留值，但會受到**回滾**的影響（當 K 線確認時，值恢復到上一根已確認 K 線的狀態，然後為新的已確認 K 線重新執行一次）。

## `varip` — 無回滾持久化

`varip`（var intrabar persist）類似於 `var` — 僅初始化一次。關鍵區別是 `varip` 變數在即時 K 線上**不受回滾影響**。它們在所有執行中保留值，包括同一未確認 K 線內的多個 tick：

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

這對追蹤 tick 級別的數據很有用。在歷史 K 線上，`varip` 的行為與 `var` 相同。

### `varip` 用於類型欄位

`varip` 可以用於單個類型欄位，使其在 K 線內更新間持久化，而其他欄位仍然會回滾：

```navi
struct Counter {
    bars: int = 0,
    varip ticks: int = 0,
}

var counter: Counter = Counter.new();
counter.bars += 1; // 在未確認 K 線上會回滾
counter.ticks += 1; // 不會回滾
```

### 對比表

| 行為 | 無關鍵字 | `var` | `varip` |
|---|---|---|---|
| 初始化 | 每次執行 | 一次（第一根 K 線） | 一次（第一根 K 線） |
| 歷史 K 線 | 每根 K 線重新初始化 | 持久化 | 持久化 |
| 即時 tick | 每個 tick 重新初始化 | 持久化（有回滾） | 持久化（無回滾） |

## 元組解構

返回元組的函數可以使用 `(...)` 語法解構：

```navi
let (median, upperBand, lowerBand) = ta.bb(close, 20, 2.0);
plot(median);
plot(upperBand);
plot(lowerBand);
```

## 丟棄（`_`）

使用 `_` 丟棄不需要的值。它可以多次使用：

```navi
let (_, upper, _) = ta.bb(close, 20, 2.0);

let _ = someFunction();      // 丟棄返回值
let _ = anotherFunction();
```

## `na` — 缺失值

`na` 表示缺失或未定義的值。當數據不足時，許多函數會返回 `na`：

```navi
let sma5 = ta.sma(close, 5); // 前 4 根 K 線為 na

// 使用 na() 檢測 na
if not na(sma5) {
    label.new(bar_index, sma5, str.tostring(sma5));
}
```

使用 `nz()` 將 `na` 替換為預設值：

```navi
let value = nz(ta.sma(close, 5), 0.0);  // 將 na 替換為 0
```

使用 `fixnan()` 將 `na` 替換為最後一個非 na 值：

```navi
let value = fixnan(ta.sma(close, 5));
```

## 下一步

- [控制結構](/zh-HK/guide/control-structures) — if、for、while、switch
- [函數與方法](/zh-HK/guide/functions-and-methods) — 定義和調用函數
