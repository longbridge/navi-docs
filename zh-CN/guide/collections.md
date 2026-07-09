# 集合类型

Navi 提供三种泛型集合类型：

| 类型 | 说明 |
|---|---|
| `array<T>` | 有序、可按索引访问的序列 |
| `matrix<T>` | 按行 × 列索引的二维表格 |
| `map<K, V>` | 键值存储 |

集合是**引用类型** — 赋值只复制引用，不复制内容。如需独立副本，请使用 `.copy()`。

用 `var` 声明集合，使其在每根 K 线间持久保留：

```navi
var highs: array<float> = array.new<float>();
highs.push(high);   // 每根 K 线追加一个值
```

## 元组

元组用于从函数返回多个值。元组不能存入变量、作为参数传递，也不能用于表达式中 — 必须立即解构：

```navi
fn calcBands(src, length, mult) {
    let basis = ta.sma(src, length);
    let dev = mult * ta.stdev(src, length);
    (basis, basis + dev, basis - dev);
}

let (mid, upper, lower) = calcBands(close, 20, 2.0);
```

## `array<T>`

有序的零索引序列。

**创建**

```navi
var a: array<float> = array.new<float>();
let b: array<float> = array.new<float>(5, 0.0);  // 预分配大小，用 0.0 填充
let c: array<int>   = array.from(10, 20, 30);
let values = [1, 2, 3];                           // 数组字面量
```

**读取与写入**

```navi
a.push(close);                           // 追加到末尾
a.unshift(close);                        // 插入到开头
let last: float  = a.last();
let first: float = a.first();
let val: float   = a.get(2);             // 按索引访问（负数从末尾倒数）
a.set(2, 99.0);
a.insert(1, 42.0);
let removed: float = a.remove(1);
let popped: float  = a.pop();
let shifted: float = a.shift();
let n: int = a.size();
```

**查找**

```navi
let found: bool = a.includes(close);
let idx: int    = a.indexof(close);
let last: int   = a.lastindexof(close);
```

**切片与合并**

```navi
let sub: array<float>  = a.slice(1, 4);
let both: array<float> = a.concat(b);
let dup: array<float>  = a.copy();
a.reverse();
a.fill(0.0, 0, 3);
a.clear();
```

**排序**

```navi
a.sort();
a.sort(SortOrder.Descending);
let idx: array<int> = a.sort_indices();
```

**统计**（数值数组）

```navi
let total: float = a.sum();
let mean: float  = a.avg();
let med: float   = a.median();
let sd: float    = a.stdev();
let hi: float    = a.max();
let lo: float    = a.min();
let rng: float   = a.range();
```

**遍历**

```navi
for v in vals {
    total += v;
}

for (i, v) in vals {
    log.info("{0}: {1}", i, v);
}
```

## `map<K, V>`

无序的键值存储。键必须是基本类型或枚举。

```navi
let counts = {"a": 1, "b": 2};               // map 字面量
var m: map<string, float> = map.new<string, float>();

m.put("open",  open);
m.put("close", close);

let o: float      = m.get("open");
let exists: bool  = m.contains("close");
let count: int    = m.size();
let old: float    = m.remove("open");

let ks: array<string> = m.keys();
let vs: array<float>  = m.values();

m.put_all(other);
m.clear();
let dup: map<string, float> = m.copy();
```

**遍历**

```navi
for (k, v) in m {
    log.info("{0} = {1}", k, v);
}
```

## `matrix<T>`

按 `[行, 列]` 索引的二维表格。

```navi
let mat: matrix<float> = matrix.new<float>(3, 4, 0.0);

mat.set(0, 0, 1.5);
let v: float = mat.get(0, 0);
let r: int   = mat.rows();
let c: int   = mat.columns();

let row0: array<float> = mat.row(0);
let col1: array<float> = mat.col(1);

mat.add_row(na, array.from(1.0, 2.0, 3.0, 4.0));
mat.add_col();
mat.remove_row();
mat.remove_col(0);
mat.reshape(2, 6);
let sub: matrix<float> = mat.submatrix(0, 2, 0, 2);
let t: matrix<float>   = mat.transpose();
mat.swap_rows(0, 1);
mat.swap_columns(0, 1);
mat.reverse();
mat.fill(0.0);
mat.sort();
let dup: matrix<float> = mat.copy();
```

**数学运算**（数值矩阵）

```navi
let total: float         = mat.avg();
let hi: float            = mat.max();
let lo: float            = mat.min();
let s: matrix<float>     = mat.sum(other);
let d: matrix<float>     = mat.diff(other);
let p: matrix<float>     = mat.multi(other);
let i: matrix<float>     = mat.inv();
let det: float           = mat.det();
let rk: int              = mat.rank();
let tr: float            = mat.trace();
let pw: matrix<float>    = mat.pow(2);
```
