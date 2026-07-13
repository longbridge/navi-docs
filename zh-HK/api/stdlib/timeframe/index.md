---
title: "timeframe"
---

# timeframe

## 屬性

### is_daily {#is_daily}

**類型:** <code>simple&nbsp;bool</code>

如果當前分辨率是每日分辨率，則傳回 `true`，否則傳回 `false`。

---

### is_dwm {#is_dwm}

**類型:** <code>simple&nbsp;bool</code>

如果當前分辨率是每日、每週或每月分辨率，則傳回 `true`，否則傳回 `false`。

---

### is_intraday {#is_intraday}

**類型:** <code>simple&nbsp;bool</code>

如果當前分辨率是日內（分鐘或秒）分辨率，則傳回 `true`，否則傳回 `false`。

---

### is_minutes {#is_minutes}

**類型:** <code>simple&nbsp;bool</code>

如果當前分辨率是分鐘分辨率，則傳回 `true`，否則傳回 `false`。

---

### is_monthly {#is_monthly}

**類型:** <code>simple&nbsp;bool</code>

如果當前分辨率是每月分辨率，則傳回 `true`，否則傳回 `false`。

---

### is_seconds {#is_seconds}

**類型:** <code>simple&nbsp;bool</code>

如果當前分辨率是秒分辨率，則傳回 `true`，否則傳回 `false`。

---

### is_ticks {#is_ticks}

**類型:** <code>simple&nbsp;bool</code>

如果當前分辨率是刻度分辨率，則傳回 `true`，否則傳回 `false`。

---

### is_weekly {#is_weekly}

**類型:** <code>simple&nbsp;bool</code>

如果當前分辨率是每週分辨率，則傳回 `true`，否則傳回 `false`。

---

### main_period {#main_period}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

傳回為腳本本身選擇的基準時間範圍。在 `request.*()` 表達式內部，該值仍然指向外部腳本的時間範圍而不是臨時請求時間範圍。

---

### multiplier {#multiplier}

**類型:** <code>simple&nbsp;int</code>

分辨率的乘數，例如“60”- 60、“D”- 1、“5D”- 5、“12M”- 12。

**類型:** <code>simple&nbsp;int</code>

分辨率的乘數，例如“60”- 60、“D”- 1、“5D”- 5、“12M”- 12。

---

### period {#period}

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

腳本主要時間範圍的字符串表示形式。如果腳本是在其聲明語句中指定 `timeframe` 值的 <a class="stdlib-ref" data-key="prelude::indicator" href="/zh-HK/api/stdlib/prelude/#indicator">indicator</a>，則此變量將保存該值。否則，其值代表圖表的時間範圍。該字符串的格式為“&lt;數量&gt;[&lt;單位&gt;]”，其中 &lt;單位&gt; 為“T”（代表刻度）、“S”（秒）、“D”（天）、“W”（周）和“M”（月），但分鐘不存在。小時不存在 &lt;unit&gt;：每小時時間範圍以分鐘表示。該變量的值為：“10S”表示 10 秒，“30”表示 30 分鐘，“240”表示四小時，“1D”表示一天，“2W”表示兩週，“3M”表示四分之一。

**類型:** <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

腳本的主要時間範圍或請求的時間範圍的字符串表示形式。

## 函數

### change {#change}

```navi
timeframe.change(timeframe: String): bool
```

檢測指定時間範圍內的變化。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timeframe` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code>bool</code>

---

### from_seconds {#from_seconds}

```navi
timeframe.from_seconds(seconds: int): String
```

將秒轉換為時間範圍字符串。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `seconds` | <code>int</code> |  | 要轉換的秒數。 |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — 時間範圍字符串（例如，3600 傳回“60”，86400 傳回“D”）。

---

### in_seconds {#in_seconds}

```navi
timeframe.in_seconds(timeframe: String = timeframe.period): simple int
```

將時間範圍字符串轉換為秒。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `timeframe` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> | `timeframe.period` | 要轉換的時間範圍字符串。默認為圖表的時間範圍。 |

**返回:** <code>simple&nbsp;int</code> — 給定時間範圍的一個 bar 中的秒數。例如，“D”傳回 86400，“60”傳回 3600。
