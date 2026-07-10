---
title: "Map<K, V>"
---

# Map&lt;K, V&gt;

將 `K` 類型的鍵映射到 `V` 類型值的鍵值存儲。

**種類:** object

## 靜態方法

### new {#new}

```navi
Map.new(): const Map<K, V>
```

Creates a new empty map of the specified key and value types.

**返回:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code>

## 方法

### clear {#clear}

```navi
Map.clear(id: Map<K, V>)
```

清空給定地圖中的所有條目。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 地圖要清晰。 |

---

### contains {#contains}

```navi
Map.contains(id: Map<K, V>, key: K): bool
```

檢查給定映射中是否存在指定的鍵。如果找到該鍵，則傳回 `true`，否則傳回 `false`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要搜索的地圖。 |
| `key` | <code>K</code> |  | 檢查是否存在的關鍵。 |

**返回:** <code>bool</code>

---

### copy {#copy}

```navi
Map.copy(id: Map<K, V>): Map<K, V>
```

創建給定 `map` 的複本並傳回新映射。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要複製的地圖。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code>

---

### get {#get}

```navi
Map.get(id: Map<K, V>, key: K): V
```

檢索與給定映射中指定鍵關聯的值，如果該鍵不存在，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要從中檢索值的映射。 |
| `key` | <code>K</code> |  | 關鍵是在地圖上查找。 |

**返回:** <code>V</code> — 與 `key` 關聯的值，如果鍵不存在，則與 `na` 關聯。

---

### keys {#keys}

```navi
Map.keys(id: Map<K, V>): Array<K>
```

傳回一個陣列，其中包含給定映射中存在的所有鍵。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 從中獲取鑰匙的地圖。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;K&gt;</code>

---

### put {#put}

```navi
Map.put(id: Map<K, V>, key: K, value: V): V
```

插入或更新與給定映射中指定鍵關聯的值。如果該鍵存在，則傳回先前的值；如果是新條目，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要在其中插入或更新值的映射。 |
| `key` | <code>K</code> |  | 與值關聯的鍵。 |
| `value` | <code>V</code> |  | 要插入或更新的值。 |

**返回:** <code>V</code> — 與 `key` 或 `na` 關聯的先前值（如果該鍵先前不存在）。

---

### put_all {#put_all}

```navi
Map.put_all(id: Map<K, V>, id2: Map<K, V>)
```

將所有鍵值對從源映射覆制到目標映射。目標映射中的現有鍵將使用源映射中的值進行更新。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 將值複製到的目標映射。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要從中複製值的源映射。 |

---

### remove {#remove}

```navi
Map.remove(id: Map<K, V>, key: K): V
```

從給定映射中刪除與指定鍵關聯的條目。如果該鍵存在，則傳回刪除的值；如果未找到該鍵，則傳回 `na`。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要從中刪除值的映射。 |
| `key` | <code>K</code> |  | 要刪除的條目的鍵。 |

**返回:** <code>V</code> — 刪除的值，或者 `na` 如果未找到密鑰。

---

### size {#size}

```navi
Map.size(id: Map<K, V>): int
```

傳回當前存儲在給定映射中的鍵值對的數量。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要獲取其大小的地圖。 |

**返回:** <code>int</code>

---

### values {#values}

```navi
Map.values(id: Map<K, V>): Array<V>
```

傳回一個包含給定映射中存在的所有值的陣列。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 從中獲取值的地圖。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array</a>&lt;V&gt;</code>
