---
title: "AlertFreq"
---

# AlertFreq

alert() 的触发频率常量。

**种类:** enum

**成员**

| 名称 | 说明 |
| --- | --- |
| `All` | 每次调用都触发。 |
| `OncePerBar` | 每根 K 线最多触发一次（先调用者获胜）。 |
| `OncePerBarClose` | K 线收盘时触发一次（实时确认后）。 |
