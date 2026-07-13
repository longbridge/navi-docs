---
title: "集合類型"
---

# 集合類型

Navi 提供三種泛型集合類型：

| 類型 | 描述 |
|---|---|
| `Array<T>` | 有序、可索引的序列 |
| `Matrix<T>` | 由行與列組成的二維表格 |
| `Map<K, V>` | 鍵值存儲 |

集合是**參考類型** — 賦值時複製的是參考，而非內容本身。如需獨立副本，請使用 `.copy()`。

使用 `var` 宣告集合，使其在每根 K 線間持久保留：

```navi
var highs: Array<float> = Array.new<float>();
highs.push(high);   // 每根 K 線追加一個值
```

## 元組（Tuples）

元組用於將函式的多個回傳值組合在一起。元組不能存入變數、作為參數傳遞或用於表達式中 — 必須立即進行解構：

```navi
fn calcBands(src, length, mult) {
    let basis = ta.sma(src, length);
    let dev = mult * ta.stdev(src, length);
    (basis, basis + dev, basis - dev);
}

let (mid, upper, lower) = calcBands(close, 20, 2.0);
```

## `Array<T>`

從零開始索引的有序序列。

**建立**

```navi
var a: Array<float> = Array.new<float>();
let b: Array<float> = Array.new<float>(5, 0.0);  // 預設大小，填充為 0.0
let c: Array<int>   = Array.from(10, 20, 30);
let values = [1, 2, 3];                           // 陣列字面值
```

**讀取與寫入**

```navi
a.push(close);                           // 追加至末尾
a.unshift(close);                        // 插入至開頭
let last: float  = a.last();
let first: float = a.first();
let val: float   = a.get(2);             // 按索引取值（負值從末尾計算）
a.set(2, 99.0);
a.insert(1, 42.0);
let removed: float = a.remove(1);
let popped: float  = a.pop();
let shifted: float = a.shift();
let n: int = a.size();
```

**搜尋**

```navi
let found: bool = a.includes(close);
let idx: int    = a.indexof(close);
let last: int   = a.lastindexof(close);
```

**切片與合併**

```navi
let sub: Array<float>  = a.slice(1, 4);
let both: Array<float> = a.concat(b);
let dup: Array<float>  = a.copy();
a.reverse();
a.fill(0.0, 0, 3);
a.clear();
```

**排序**

```navi
a.sort();
a.sort(SortOrder.Descending);
let idx: Array<int> = a.sort_indices();
```

**統計運算**（數值陣列）

```navi
let total: float = a.sum();
let mean: float  = a.avg();
let med: float   = a.median();
let sd: float    = a.stdev();
let hi: float    = a.max();
let lo: float    = a.min();
let rng: float   = a.range();
```

**迭代**

```navi
for v in vals {
    total += v;
}

for (i, v) in vals {
    log.info("{0}: {1}", i, v);
}
```

## `Map<K, V>`

無序的鍵值存儲。鍵必須為基本類型或枚舉類型。

```navi
let counts = {"a": 1, "b": 2};               // map 字面值
var m: Map<string, float> = Map.new<string, float>();

m.put("open",  open);
m.put("close", close);

let o: float      = m.get("open");
let exists: bool  = m.contains("close");
let count: int    = m.size();
let old: float    = m.remove("open");

let ks: Array<string> = m.keys();
let vs: Array<float>  = m.values();

m.put_all(other);
m.clear();
let dup: Map<string, float> = m.copy();
```

**迭代**

```navi
for (k, v) in m {
    log.info("{0} = {1}", k, v);
}
```

## `Matrix<T>`

以 `[行, 列]` 索引的二維表格。

```navi
let mat: Matrix<float> = Matrix.new<float>(3, 4, 0.0);

mat.set(0, 0, 1.5);
let v: float = mat.get(0, 0);
let r: int   = mat.rows();
let c: int   = mat.columns();

let row0: Array<float> = mat.row(0);
let col1: Array<float> = mat.col(1);

mat.add_row(na, Array.from(1.0, 2.0, 3.0, 4.0));
mat.add_col();
mat.remove_row();
mat.remove_col(0);
mat.reshape(2, 6);
let sub: Matrix<float> = mat.subMatrix(0, 2, 0, 2);
let t: Matrix<float>   = mat.transpose();
mat.swap_rows(0, 1);
mat.swap_columns(0, 1);
mat.reverse();
mat.fill(0.0);
mat.sort();
let dup: Matrix<float> = mat.copy();
```

**數學運算**（數值矩陣）

```navi
let total: float         = mat.avg();
let hi: float            = mat.max();
let lo: float            = mat.min();
let s: Matrix<float>     = mat.sum(other);
let d: Matrix<float>     = mat.diff(other);
let p: Matrix<float>     = mat.multi(other);
let i: Matrix<float>     = mat.inv();
let det: float           = mat.det();
let rk: int              = mat.rank();
let tr: float            = mat.trace();
let pw: Matrix<float>    = mat.pow(2);
```
