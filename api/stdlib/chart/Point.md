---
title: "chart.Point"
---

# chart.Point

A point on the chart (index, time, price).

**Kind:** object

**Fields**

| Name | Type | Description |
| --- | --- | --- |
| `index` | <code>int</code> | The x-coordinate of the point, expressed as a bar index value. |
| `time` | <code>int</code> | The x-coordinate of the point, expressed as a UNIX timestamp in milliseconds. |
| `price` | <code>float</code> | The y-coordinate of the point. |

## Static Methods

### from_index {#from_index}

```navi
Point.from_index(index: int, price: float): Point
```

Returns a <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object at the specified bar index and price.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | <code>int</code> |  |  |
| `price` | <code>float</code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/chart/Point">Point</a></code>

---

### from_time {#from_time}

```navi
Point.from_time(time: int, price: float): Point
```

Returns a <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object with specified time and price.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `time` | <code>int</code> |  |  |
| `price` | <code>float</code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/chart/Point">Point</a></code>

---

### now {#now}

```navi
Point.now(price: float = close): Point
```

Returns a <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object with price as the y-coordinate.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `price` | <code>float</code> | `close` |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/chart/Point">Point</a></code>
