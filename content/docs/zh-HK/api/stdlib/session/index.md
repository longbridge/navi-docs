---
title: "session"
---

# session

## 屬性

### is_first_bar {#is_first_bar}

**類型:** <code>series&nbsp;bool</code>

若當前 K 線是當日交易時段的第一根，則返回 `true`，否則返回 `false`。

---

### is_first_bar_regular {#is_first_bar_regular}

**類型:** <code>series&nbsp;bool</code>

若當前 K 線是當日常規交易時段的第一根，則返回 `true`，否則返回 `false`。

---

### is_last_bar {#is_last_bar}

**類型:** <code>series&nbsp;bool</code>

若當前 K 線是當日交易時段的最後一根，則返回 `true`，否則返回 `false`。

---

### is_last_bar_regular {#is_last_bar_regular}

**類型:** <code>series&nbsp;bool</code>

若當前 K 線是當日常規交易時段的最後一根，則返回 `true`，否則返回 `false`。

---

### is_market {#is_market}

**類型:** <code>series&nbsp;bool</code>

若當前 K 線處於常規交易時段（市場時間），則返回 `true`，否則返回 `false`。

---

### is_postmarket {#is_postmarket}

**類型:** <code>series&nbsp;bool</code>

若當前 K 線處於盤後交易時段，則返回 `true`，否則返回 `false`。

---

### is_premarket {#is_premarket}

**類型:** <code>series&nbsp;bool</code>

若當前 K 線處於盤前交易時段，則返回 `true`，否則返回 `false`。
