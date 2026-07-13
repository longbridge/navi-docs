---
title: "chart.Point"
---

# chart.Point

圖表上的一個點（指數、時間、價格）。

**種類:** object

**欄位**

| 名稱 | 類型 | 說明 |
| --- | --- | --- |
| `index` | <code>int</code> | 點的 x 座標，表示為 bar 索引值。 |
| `time` | <code>int</code> | 該點的 x 座標，表示為 UNIX 時間戳（以毫秒為單位）。 |
| `price` | <code>float</code> | 點的 y 座標。 |

## 靜態方法

### from_index {#from_index}

```navi
Point.from_index(index: int, price: float): Point
```

傳回指定 bar 索引和價格處的 <a class="stdlib-ref" data-key="chart::Point" href="/zh-HK/api/stdlib/chart/Point">chart.Point</a> 物件。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `index` | <code>int</code> |  |  |
| `price` | <code>float</code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">Point</a></code>

---

### from_time {#from_time}

```navi
Point.from_time(time: int, price: float): Point
```

傳回具有指定時間和價格的 <code>chart.point</code> 對象。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `time` | <code>int</code> |  |  |
| `price` | <code>float</code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">Point</a></code>

---

### now {#now}

```navi
Point.now(price: float = close): Point
```

傳回一個 <code>chart.point</code> 對象，其中價格為 y 座標。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `price` | <code>float</code> | `close` |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/chart/Point">Point</a></code>
