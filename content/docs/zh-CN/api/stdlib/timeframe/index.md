---
title: "timeframe"
---

# timeframe

## 属性

### is_daily {#is_daily}

**类型:** <code>simple&nbsp;bool</code>

如果当前分辨率是每日分辨率，则返回 `true`，否则返回 `false`。

---

### is_dwm {#is_dwm}

**类型:** <code>simple&nbsp;bool</code>

如果当前分辨率是每日、每周或每月分辨率，则返回 `true`，否则返回 `false`。

---

### is_intraday {#is_intraday}

**类型:** <code>simple&nbsp;bool</code>

如果当前分辨率是日内（分钟或秒）分辨率，则返回 `true`，否则返回 `false`。

---

### is_minutes {#is_minutes}

**类型:** <code>simple&nbsp;bool</code>

如果当前分辨率是分钟分辨率，则返回 `true`，否则返回 `false`。

---

### is_monthly {#is_monthly}

**类型:** <code>simple&nbsp;bool</code>

如果当前分辨率是每月分辨率，则返回 `true`，否则返回 `false`。

---

### is_seconds {#is_seconds}

**类型:** <code>simple&nbsp;bool</code>

如果当前分辨率是秒分辨率，则返回 `true`，否则返回 `false`。

---

### is_ticks {#is_ticks}

**类型:** <code>simple&nbsp;bool</code>

如果当前分辨率是刻度分辨率，则返回 `true`，否则返回 `false`。

---

### is_weekly {#is_weekly}

**类型:** <code>simple&nbsp;bool</code>

如果当前分辨率是每周分辨率，则返回 `true`，否则返回 `false`。

---

### main_period {#main_period}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

返回为脚本本身选择的基准时间范围。在 `request.*()` 表达式内部，该值仍然指向外部脚本的时间范围而不是临时请求时间范围。

---

### multiplier {#multiplier}

**类型:** <code>simple&nbsp;int</code>

分辨率的乘数，例如“60”- 60、“D”- 1、“5D”- 5、“12M”- 12。

**类型:** <code>simple&nbsp;int</code>

分辨率的乘数，例如“60”- 60、“D”- 1、“5D”- 5、“12M”- 12。

---

### period {#period}

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

脚本主要时间范围的字符串表示形式。如果脚本是在其声明语句中指定 `timeframe` 值的 <a class="stdlib-ref" data-key="prelude::indicator" href="/zh-CN/api/stdlib/prelude/#indicator">indicator</a>，则此变量将保存该值。否则，其值代表图表的时间范围。该字符串的格式为“&lt;数量&gt;[&lt;单位&gt;]”，其中 &lt;单位&gt; 为“T”（代表刻度）、“S”（秒）、“D”（天）、“W”（周）和“M”（月），但分钟不存在。小时不存在 &lt;unit&gt;：每小时时间范围以分钟表示。该变量的值为：“10S”表示 10 秒，“30”表示 30 分钟，“240”表示四小时，“1D”表示一天，“2W”表示两周，“3M”表示四分之一。

**类型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

脚本的主要时间范围或请求的时间范围的字符串表示形式。

## 函数

### change {#change}

```navi
timeframe.change(timeframe: String): bool
```

检测指定时间范围内的变化。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timeframe` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code>bool</code>

---

### from_seconds {#from_seconds}

```navi
timeframe.from_seconds(seconds: int): String
```

将秒转换为时间范围字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `seconds` | <code>int</code> |  | 要转换的秒数。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> — 时间范围字符串（例如，3600 返回“60”，86400 返回“D”）。

---

### in_seconds {#in_seconds}

```navi
timeframe.in_seconds(timeframe: String = timeframe.period): simple int
```

将时间范围字符串转换为秒。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `timeframe` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `timeframe.period` | 要转换的时间范围字符串。默认为图表的时间范围。 |

**返回:** <code>simple&nbsp;int</code> — 给定时间范围的一个 bar 中的秒数。例如，“D”返回 86400，“60”返回 3600。
