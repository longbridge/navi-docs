---
title: "BarmergeGaps"
---

# BarmergeGaps

Gap mode for `request.*()` functions.

**Kind:** enum

**Variants**

| Name | Description |
| --- | --- |
| `On` | Emit `na` for every bar where no new value has been confirmed. |
| `Off` | Carry the last known value forward — no `na` gaps between bar closes (default). |
