---
title: "chart.Point"
---

# chart.Point

图表上的一个点（指数、时间、价格）。

**种类:** object

**字段**

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `index` | <code>int</code> | 点的 x 坐标，表示为 bar 索引值。 |
| `time` | <code>int</code> | 该点的 x 坐标，表示为 UNIX 时间戳（以毫秒为单位）。 |
| `price` | <code>float</code> | 点的 y 坐标。 |

## 静态方法

### from_index {#from_index}

```navi
Point.from_index(index: int, price: float): Point
```

返回指定 bar 索引和价格处的 <a class="stdlib-ref" data-key="chart::Point" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a> 对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `index` | <code>int</code> |  |  |
| `price` | <code>float</code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">Point</a></code>

---

### from_time {#from_time}

```navi
Point.from_time(time: int, price: float): Point
```

返回具有指定时间和价格的 <code>chart.point</code> 对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `time` | <code>int</code> |  |  |
| `price` | <code>float</code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">Point</a></code>

---

### now {#now}

```navi
Point.now(price: float = close): Point
```

返回一个 <code>chart.point</code> 对象，其中价格为 y 坐标。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `price` | <code>float</code> | `close` |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">Point</a></code>
