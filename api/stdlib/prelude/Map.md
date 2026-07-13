---
title: "Map<K, V>"
---

# Map&lt;K, V&gt;

A key-value store mapping keys of type `K` to values of type `V`.

Keys must be hashable: `int`, `float`, `bool`, `String`, `color`, or enum. Create with `Map.new()` or a map literal `{"key": value}`.

**Kind:** object

## Static Methods

### new {#new}

```navi
Map.new(): const Map<K, V>
```

Creates a new empty map of the specified key and value types.

**Returns:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code>

## Methods

### clear {#clear}

```navi
Map.clear(id: Map<K, V>)
```

Clears all entries from the given map.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | the map to clear. |

---

### contains {#contains}

```navi
Map.contains(id: Map<K, V>, key: K): bool
```

Checks if the specified key exists in the given map.

It returns `true` if the key is found, otherwise `false`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | the map to search in. |
| `key` | <code>K</code> |  | The key to check for existence. |

**Returns:** <code>bool</code>

---

### copy {#copy}

```navi
Map.copy(id: Map<K, V>): Map<K, V>
```

Creates a copy of the given map and returns the new id.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | the map to copy. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code>

---

### get {#get}

```navi
Map.get(id: Map<K, V>, key: K): V
```

Retrieves the value associated with the specified key in the given id, or returns `na` if the key does not exist.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | the map to retrieve the value from. |
| `key` | <code>K</code> |  | The key to look up in the map. |

**Returns:** <code>V</code> — The value associated with `key`, or `na` if the key does not exist.

---

### keys {#keys}

```navi
Map.keys(id: Map<K, V>): Array<K>
```

Returns an array containing all the keys present in the given id.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | the map to get the keys from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;K&gt;</code>

---

### put {#put}

```navi
Map.put(id: Map<K, V>, key: K, value: V): V
```

Inserts or updates the value associated with the specified key in the given map.

It returns the previous value if the key existed, or `na` if it is a new entry.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | the map to insert or update a value in. |
| `key` | <code>K</code> |  | The key to associate with the value. |
| `value` | <code>V</code> |  | The value to insert or update. |

**Returns:** <code>V</code> — The previous value associated with `key`, or `na` if the key was not previously present.

---

### put_all {#put_all}

```navi
Map.put_all(id: Map<K, V>, id2: Map<K, V>)
```

Copies all key-value pairs from the source map to the destination id.

Existing keys in the destination id will be updated with values from the source id.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | The destination id to copy values into. |
| `id2` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | The source id to copy values from. |

---

### remove {#remove}

```navi
Map.remove(id: Map<K, V>, key: K): V
```

Removes the entry associated with the specified key from the given map.

It returns the removed value if the key existed, or `na` if the key was not found.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | the map to remove a value from. |
| `key` | <code>K</code> |  | The key of the entry to remove. |

**Returns:** <code>V</code> — The removed value, or `na` if the key was not found.

---

### size {#size}

```navi
Map.size(id: Map<K, V>): int
```

Returns the number of key-value pairs currently stored in the given map.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | the map to get the size of. |

**Returns:** <code>int</code>

---

### values {#values}

```navi
Map.values(id: Map<K, V>): Array<V>
```

Returns an array containing all the values present in the given id.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Map">Map</a>&lt;K, V&gt;</code> |  | the map to get the values from. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;V&gt;</code>
