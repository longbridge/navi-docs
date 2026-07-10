---
title: "Map<K, V>"
---

# Map&lt;K, V&gt;

将 `K` 类型的键映射到 `V` 类型值的键值存储。

**种类:** object

## 静态方法

### new {#new}

```navi
Map.new(): const Map<K, V>
```

Creates a new empty map of the specified key and value types.

**返回:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code>

## 方法

### clear {#clear}

```navi
Map.clear(id: Map<K, V>)
```

清空给定地图中的所有条目。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 地图要清晰。 |

---

### contains {#contains}

```navi
Map.contains(id: Map<K, V>, key: K): bool
```

检查给定映射中是否存在指定的键。如果找到该键，则返回 `true`，否则返回 `false`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要搜索的地图。 |
| `key` | <code>K</code> |  | 检查是否存在的关键。 |

**返回:** <code>bool</code>

---

### copy {#copy}

```navi
Map.copy(id: Map<K, V>): Map<K, V>
```

创建给定 `map` 的拷贝并返回新映射。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要复制的地图。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code>

---

### get {#get}

```navi
Map.get(id: Map<K, V>, key: K): V
```

检索与给定映射中指定键关联的值，如果该键不存在，则返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要从中检索值的映射。 |
| `key` | <code>K</code> |  | 关键是在地图上查找。 |

**返回:** <code>V</code> — 与 `key` 关联的值，如果键不存在，则与 `na` 关联。

---

### keys {#keys}

```navi
Map.keys(id: Map<K, V>): Array<K>
```

返回一个数组，其中包含给定映射中存在的所有键。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 从中获取钥匙的地图。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;K&gt;</code>

---

### put {#put}

```navi
Map.put(id: Map<K, V>, key: K, value: V): V
```

插入或更新与给定映射中指定键关联的值。如果该键存在，则返回先前的值；如果是新条目，则返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要在其中插入或更新值的映射。 |
| `key` | <code>K</code> |  | 与值关联的键。 |
| `value` | <code>V</code> |  | 要插入或更新的值。 |

**返回:** <code>V</code> — 与 `key` 或 `na` 关联的先前值（如果该键先前不存在）。

---

### put_all {#put_all}

```navi
Map.put_all(id: Map<K, V>, id2: Map<K, V>)
```

将所有键值对从源映射复制到目标映射。目标映射中的现有键将使用源映射中的值进行更新。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 将值复制到的目标映射。 |
| `id2` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要从中复制值的源映射。 |

---

### remove {#remove}

```navi
Map.remove(id: Map<K, V>, key: K): V
```

从给定映射中删除与指定键关联的条目。如果该键存在，则返回删除的值；如果未找到该键，则返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要从中删除值的映射。 |
| `key` | <code>K</code> |  | 要删除的条目的键。 |

**返回:** <code>V</code> — 删除的值，或者 `na` 如果未找到密钥。

---

### size {#size}

```navi
Map.size(id: Map<K, V>): int
```

返回当前存储在给定映射中的键值对的数量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 要获取其大小的地图。 |

**返回:** <code>int</code>

---

### values {#values}

```navi
Map.values(id: Map<K, V>): Array<V>
```

返回一个包含给定映射中存在的所有值的数组。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | 从中获取值的地图。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;V&gt;</code>
