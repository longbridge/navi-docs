---
title: "bar_state"
---

# bar_state

## 屬性

### is_confirmed {#is_confirmed}

**類型:** <code>series&nbsp;bool</code>

如果腳本正在計算當前 bar 的最後（結束）更新，則傳回 `true`。下一個腳本計算將基於新的 bar 資料。

---

### is_first {#is_first}

**類型:** <code>series&nbsp;bool</code>

如果當前 bar 是 barset 中的第一個 bar，則傳回 `true`。

---

### is_history {#is_history}

**類型:** <code>series&nbsp;bool</code>

如果當前 bar 是歷史 bar，則傳回 `true`。

---

### is_last {#is_last}

**類型:** <code>series&nbsp;bool</code>

如果當前 bar 是 barset 中的最後一個 bar，則傳回 `true`，否則傳回 `false`。對於 barset 中的所有實時 bars，此條件是 `true`。

---

### is_last_confirmed_history {#is_last_confirmed_history}

**類型:** <code>series&nbsp;bool</code>

如果腳本在市場休市時在資料集的最後一個 bar 上執行，則傳回 `true`；或者如果腳本在實時 bar 之前的 bar 上執行（如果市場開市），則傳回 `true`。

---

### is_new {#is_new}

**類型:** <code>series&nbsp;bool</code>

如果腳本當前正在計算新的 bar，則傳回 `true`。當計算歷史 bars 或首次更新新生成的實時 bar 時，此變量為 `true`。

---

### is_realtime {#is_realtime}

**類型:** <code>series&nbsp;bool</code>

如果腳本正在實時 bar 上計算，則傳回 `true`。
