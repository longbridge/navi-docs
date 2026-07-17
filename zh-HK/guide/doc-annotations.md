# 文件註解

Navi 支援特殊註釋標籤來為聲明附加文件。這些註解被 LSP（用於懸停提示和補全）和文件產生器使用。

支援 `//@tag` 和 `// @tag`（`//` 後有空格）兩種格式。

## 可用標籤

| 標籤 | 位置 | 描述 |
|-----|-----------|-------------|
| `@description` | 檔案頭部（任何聲明之前） | 為函式庫添加頂層描述 |
| `@function` | 函式聲明上方 | 為函式添加自訂描述 |
| `@param` | 函式聲明上方 | 為參數添加描述。指定參數名稱，然後是描述 |
| `@returns` | 函式聲明上方 | 為傳回值添加描述 |
| `@type` | 類型或 newtype 聲明上方 | 為類型添加自訂描述 |
| `@enum` | 枚舉聲明上方 | 為枚舉添加自訂描述 |
| `@field` | 類型或枚舉聲明上方 | 為欄位或變體添加描述。指定欄位名稱，然後是描述 |
| `@variable` | 變數聲明上方 | 為變數添加自訂描述 |
| `@example` | 函式或類型聲明上方 | 開啟一個程式碼範例區塊（由 `@endexample` 關閉） |
| `@endexample` | 關閉 `@example` 區塊 | — |

所有標籤支援**多行續寫**：緊跟在標籤行之後以 `//` 開頭（不帶 `@` 標籤）的行會被追加到該標籤的文字中。

## 文件化函式

使用 `@function`、`@param` 和 `@returns` 來文件化函式聲明：

```navi
//@function Outputs a label with `labelText` on the bar's high.
//@param labelText (series string) The text to display on the label.
//@returns The drawn label ID.
export fn drawLabel(labelText: string) {
    label.new(bar_index, high, text: labelText);
}
```

`@param` 和 `@returns` 可以出現在 `@function` 標籤之前或之後：

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

續寫行（以 `//` 開頭但不帶 `@`）會擴展前一個標籤的描述：

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

## 文件化類型

使用 `@type` 和 `@field` 來文件化類型聲明：

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

`@type` 標籤也適用於 newtype 聲明：

```navi
//@type Handle for a label drawing object.
export type label = int;
```

## 文件化枚舉

使用 `@enum` 和 `@field` 來文件化枚舉聲明及其變體：

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

## 文件化變數

使用 `@variable` 來文件化變數聲明：

```navi
//@variable The highest price over the last 20 bars.
let highest20: float = ta.highest(high, 20);

//@variable Tracks cumulative volume since the session started.
var cumVol: float = 0.0;
```

## 程式碼範例

使用 `@example` / `@endexample` 對為函式或類型附加可執行的程式碼範例。區塊內每行是普通的 `//` 註釋，`// `（含空格）前綴會自動剝除。允許多個區塊，每個區塊成為一個獨立的範例。

```navi
//@function 計算兩個價格之間的百分比偏差。
//@param base  參考價格。
//@param price 目標價格。
//@returns 帶符號的偏差百分比。
//@example
// // 將今日收盤價與昨日收盤價比較
// let deviation = calcDeviation(close[1], close);
// plot(deviation, title: "偏差 %");
//@endexample
export fn calcDeviation(base: float, price: float) {
    100 * (price - base) / base
}
```

多個範例分別用獨立的區塊包裹：

```navi
//@function 傳回 `src` 在 `length` 根 K 線上的簡單移動平均值。
//@example
// // 基本的 20 根 K 線 SMA
// plot(ta.sma(close, 20));
//@endexample
//@example
// // 使用兩條 SMA 的交叉訊號
// let fast = ta.sma(close, 9);
// let slow = ta.sma(close, 21);
// plot_shape(ta.cross_over(fast, slow), style: Shape.LabelUp);
//@endexample
export series float sma(series float src, simple int length) => ...
```

範例會顯示在 VS Code 的 **LSP 懸停提示**中。

## 交叉引用連結

在任何描述文字中，可以用 `` [`name`] `` 語法建立指向其他符號的交叉引用連結。在 API 參考對話框和產生的文件頁面中，這些連結會渲染為可點擊的導航連結。

```navi
//@type Handle for a plot created by [`func:plot`].
export type plot = int;
//@function Fills the area between two [`func:plot`] handles.
//@param hline1 The first horizontal line handle (from [`func:hline`]).
//@returns An hline handle that can be used with [`fill`].
```

**語法：**

| 語法 | 解析目標 |
|------|---------|
| `` [`fill`] `` | 當前模組的 `fill`，或 prelude 的 `fill`，或全域搜尋 |
| `` [`BarmergeGaps.Off`] `` | `BarmergeGaps.Off`（枚舉成員） |
| `` [`LineStyle.Solid`] `` | `LineStyle` 列舉的 `Solid` 變體（連結到列舉型別） |
| `` [`variant:LineStyle.Solid`] `` | 顯式指定列舉變體（目標相同，語意更明確） |
| `` [`func:plot`] `` | `plot` **函式**（排除 `plot` 型別） |
| `` [`type:hline`] `` | `hline` **型別**（排除 `hline` 函式） |
| `` [`enum:LineStyle`] `` | 名為 `LineStyle` 的列舉 |

限定符前綴（`func`、`type`、`enum`）用於區分同一模組中同名的函式和型別。

對於帶點的引用，解析器首先檢查左側是否為**模組**並以右側作為成員名查找；未找到時再檢查左側是否為**列舉型別**且右側為其變體名——此時連結將導向對應的列舉型別。因此 `` [`BarmergeGaps.Off`] ``（枚舉變體）和 `` [`LineStyle.Solid`] ``（列舉變體）均可正確解析。

## 編輯器支援

當存在文件註解時，Navi LSP 使用它們提供：

- **懸停資訊** — 懸停在符號上時顯示描述、參數、傳回值和欄位文件
- **補全詳情** — 在自動補全建議中顯示摘要
- **文件符號** — 在大綱檢視中包含摘要

## 函式庫文件

對於匯出的函式庫，文件註解尤其重要。文件產生器（`navi-docgen`）擷取這些註解來產生 API 參考頁面。

使用 `@description` 在檔案頭部為函式庫本身添加頂層描述。它必須出現在任何聲明之前：

```navi
//@description 提供用於計算波動率區間的工具函式。
//
// 包含可自訂的布林通道和肯特納通道。
library("MyLib")
```

完整範例：

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
    basis + config.multiplier * ta.stdev(src, config.length)
}
```
