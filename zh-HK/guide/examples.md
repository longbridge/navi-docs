# 示例

本頁透過兩個完整的 Navi 腳本，逐行說明每行程式碼的用途。每個示例都以貼近實際的方式展示核心語言特性。

## 示例一 — SMA 均線交叉指標

該指標繪製快速和慢速簡單移動平均線，並在圖表上標記金叉和死叉事件。涉及變數、series、`ta` 模組、`plot` 和 `plot_shape` 等特性。

- [簡單移動平均（SMA）](https://en.wikipedia.org/wiki/Moving_average#Simple_moving_average)

```navi
// ① 將此腳本宣告為指標。
//   - title        : 顯示在圖例中的名稱
//   - overlay=true : 疊加在 K 線上繪製（而非獨立面板）
indicator("SMA Crossover", overlay:  true);

// ② 使用者可設定的輸入項。
//   input.int() 建立一個整數輸入，顯示在腳本設定面板中。
//   第二個參數為預設值；title 為在 UI 中顯示的標籤。
let fastLen = input.int(9,  title:  "Fast Length");
let slowLen = input.int(21, title:  "Slow Length");

// ③ 計算兩條 SMA series。
//   這些是 series<float>：每個 Bar 產生一個值。
let fast = ta.sma(close, fastLen);
let slow = ta.sma(close, slowLen);

// ④ 偵測金叉和死叉事件。
//   ta.cross_over(a, b)  → 在 a 向上穿越 b 的那根 Bar 返回 true
//   ta.cross_under(a, b) → 在 a 向下穿越 b 的那根 Bar 返回 true
let crossUp   = ta.cross_over(fast, slow);
let crossDown = ta.cross_under(fast, slow);

// ⑤ 將兩條均線繪製為連續折線。
//   linewidth=2 使線條略粗於預設值 1。
plot(fast, title:  "Fast SMA", color:  color.BLUE,   linewidth:  2);
plot(slow, title:  "Slow SMA", color:  color.ORANGE, linewidth:  2);

// ⑥ 在金叉 Bar 的下方繪製向上的三角形標記。
//   plot_shape 僅在第一個參數為 true 的 Bar 上繪製。
plot_shape(crossUp,
    title:  "Bullish Cross",
    style:  Shape.TriangleUp,
    location:  Location.BelowBar,
    color:  color.GREEN,
    size:  Size.Small);

// ⑦ 在死叉 Bar 的上方繪製向下的三角形標記。
plot_shape(crossDown,
    title:  "Bearish Cross",
    style:  Shape.TriangleDown,
    location:  Location.AboveBar,
    color:  color.RED,
    size:  Size.Small);

// ⑧ 在金叉或死叉 Bar 上為圖表背景新增淡色高亮。
//   color.new(c, transp) 建立帶透明度的顏色（0=不透明，100=完全透明）。
//   三元運算符 ?: 根據事件類型選擇顏色。
let bgColor = crossUp   ? color.new(color.GREEN, 85) :
              crossDown ? color.new(color.RED,   85) : na;
bg_color(bgColor);
```

### 涉及的核心概念

| 概念 | 位置 |
|---|---|
| 腳本宣告 | `indicator(...)` — 行 ① |
| 使用者輸入 | `input.int` — 行 ② |
| `series<float>` 變數 | `fast`、`slow`、`crossUp`、`crossDown` — 行 ③④ |
| `ta` 模組 | `ta.sma`、`ta.cross_over`、`ta.cross_under` — 行 ③④ |
| 繪製折線 | `plot(...)` — 行 ⑤ |
| 繪製形狀標記 | `plot_shape(...)` — 行 ⑥⑦ |
| 透明顏色 | `color.new(c, transp)` — 行 ⑧ |
| 三元運算符 | `c ? a : b` — 行 ⑧ |
| `na` 表示「無值」 | `na` 用於跳過背景著色 — 行 ⑧ |

---

## 示例二 — 布林帶策略

該策略在收盤價向上突破上軌時做多，跌回中軌以下時平多；反之，向下突破下軌時做空，反彈回中軌以上時平空。涉及 `strategy()`、`ta.bb`、元組解構、歷史運算符和 `strategy.entry` / `strategy.close` 等特性。

- [布林帶（Bollinger Bands）](https://en.wikipedia.org/wiki/Bollinger_Bands)

```navi
// ① 將此腳本宣告為策略。
// - default_qty_type  : 使用固定數量（合約/股數）
// - default_qty_value : 每筆交易預設 1 手
strategy(
    "Bollinger Bands Breakout",
    default_qty_type:  DefaultQtyType.Fixed,
    default_qty_value:  1
);

// ② 計算布林帶。
// ta.bb 返回一個元組：(中軌, 上軌, 下軌)。
// let (a, b, c) = ... 語法將元組解構為三個變數。
let (basis, upper, lower) = ta.bb(close, 20, 2.0);

// ③ 進場條件。
// close[1] 引用*上一根* Bar 的收盤價（歷史運算符 []）。
// 結合當前 Bar 與上一 Bar 的值，可精確定位價格穿越軌道的那根 Bar。
let longEntry  = close > upper and close[1] <= upper[1];
let shortEntry = close < lower and close[1] >= lower[1];

// ④ 出場條件：價格穿越中軌。
let longExit  = close < basis;
let shortExit = close > basis;

// ⑤ 發出策略指令。
// strategy.entry 開倉；strategy.close 按交易 ID 平倉。
if longEntry {
    strategy.entry("Long", Direction.Long);
}
if shortEntry {
    strategy.entry("Short", Direction.Short);
}

if longExit {
    strategy.close("Long");
}
if shortExit {
    strategy.close("Short");
}
```

### 涉及的核心概念

| 概念 | 位置 |
|---|---|
| 策略宣告 | `strategy(...)` — 行 ① |
| 元組解構 | `let (basis, upper, lower) = ta.bb(...)` — 行 ② |
| `ta.bb` | 布林帶計算 — 行 ② |
| 歷史運算符 `[]` | `close[1]`、`upper[1]` — 行 ③ |
| 布林 series | `longEntry`、`shortEntry`、`longExit`、`shortExit` — 行 ③④ |
| `if` 語句 | 策略指令塊 — 行 ⑤ |
| `strategy.entry` / `strategy.close` | 開倉與平倉 — 行 ⑤ |

---

## 延伸閱讀

- [語言基礎](/zh-HK/guide/language-basics) — 運算符、字面量、歷史運算符
- [變量與限定符](/zh-HK/guide/types-and-variables) — `var`、類型限定符、`na`
- [控制結構](/zh-HK/guide/control-structures) — `if`、`for`、`while`、`switch`
- [函數與方法](/zh-HK/guide/functions-and-methods) — 函數的定義與呼叫
- [標準庫](/zh-HK/api/stdlib/) — `ta`、`math`、`str`、`strategy` 等
