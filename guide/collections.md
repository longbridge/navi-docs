# Collections

Navi provides three generic collection types:

| Type | Description |
|---|---|
| `array<T>` | Ordered, indexable sequence |
| `matrix<T>` | 2D table of rows × columns |
| `map<K, V>` | Key-value store |

Collections are **reference types** — assigning copies the reference, not the contents. Use `.copy()` for an independent copy.

Declare collections with `var` so they persist across bars:

```navi
var highs: array<float> = array.new<float>();
highs.push(high);   // accumulates one value per bar
```

## Tuples

Tuples group multiple return values from functions. They cannot be stored in variables, passed as arguments, or used inside expressions — they must be immediately destructured:

```navi
fn calcBands(src, length, mult) {
    let basis = ta.sma(src, length);
    let dev = mult * ta.stdev(src, length);
    (basis, basis + dev, basis - dev);
}

let (mid, upper, lower) = calcBands(close, 20, 2.0);
```

## `array<T>`

An ordered, zero-indexed sequence.

**Creating**

```navi
var a: array<float> = array.new<float>();
let b: array<float> = array.new<float>(5, 0.0);  // pre-sized, filled with 0.0
let c: array<int>   = array.from(10, 20, 30);
let values = [1, 2, 3];                           // array literal
```

**Reading and writing**

```navi
a.push(close);                           // append to end
a.unshift(close);                        // prepend to front
let last: float  = a.last();
let first: float = a.first();
let val: float   = a.get(2);             // by index (negative counts from end)
a.set(2, 99.0);
a.insert(1, 42.0);
let removed: float = a.remove(1);
let popped: float  = a.pop();
let shifted: float = a.shift();
let n: int = a.size();
```

**Searching**

```navi
let found: bool = a.includes(close);
let idx: int    = a.indexof(close);
let last: int   = a.lastindexof(close);
```

**Slicing and combining**

```navi
let sub: array<float>  = a.slice(1, 4);
let both: array<float> = a.concat(b);
let dup: array<float>  = a.copy();
a.reverse();
a.fill(0.0, 0, 3);
a.clear();
```

**Sorting**

```navi
a.sort();
a.sort(SortOrder.Descending);
let idx: array<int> = a.sort_indices();
```

**Statistics** (numeric arrays)

```navi
let total: float = a.sum();
let mean: float  = a.avg();
let med: float   = a.median();
let sd: float    = a.stdev();
let hi: float    = a.max();
let lo: float    = a.min();
let rng: float   = a.range();
```

**Iterating**

```navi
for v in vals {
    total += v;
}

for (i, v) in vals {
    log.info("{0}: {1}", i, v);
}
```

## `map<K, V>`

An unordered key-value store. Keys must be a primitive type or enum.

```navi
let counts = {"a": 1, "b": 2};               // map literal
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

**Iterating**

```navi
for (k, v) in m {
    log.info("{0} = {1}", k, v);
}
```

## `matrix<T>`

A two-dimensional table indexed by `[row, column]`.

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

**Math operations** (numeric matrices)

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
