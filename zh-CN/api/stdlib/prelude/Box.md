---
title: "Box"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
</script>

# Box

方框图的句柄。

## 静态方法

### new {#new}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Box.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(left</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, top</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, right</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bottom</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, border_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, border_width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, border_style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle.Solid, extend</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend.None, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc.BarIndex, bg_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLACK, text_halign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Right, text_valign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign.Center, text_wrap</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextWrap </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextWrap.None, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat.NONE)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Box</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Box.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(left</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, top</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, right</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, bottom</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, border_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, border_width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, border_style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle.Solid, extend</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend.None, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc.BarIndex, bg_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLACK, text_halign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Right, text_valign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign.Center, text_wrap</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextWrap </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextWrap.None, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat.NONE)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Box</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Box.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(top_left</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> chart.Point, bottom_right</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> chart.Point, border_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, border_width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, border_style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle.Solid, extend</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend.None, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc.BarIndex, bg_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLACK, text_halign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Right, text_valign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign.Center, text_wrap</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextWrap </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextWrap.None, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat.NONE)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Box</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Box.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(top_left</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> chart.Point, bottom_right</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> chart.Point, border_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, border_width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, border_style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LineStyle.Solid, extend</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Extend.None, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> XLoc.BarIndex, bg_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLUE, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Auto, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Color.BLACK, text_halign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Right, text_valign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextVAlign.Center, text_wrap</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextWrap </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextWrap.None, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat.NONE)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Box</span>"]' />

<div v-show="_s0 === 0">

创建一个新的盒子对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `left` | <code>series&nbsp;int</code> |  | 左坐标（bar 索引或 UNIX 时间）。 |
| `top` | <code>series&nbsp;float</code> |  | 顶部坐标（价格）。 |
| `right` | <code>series&nbsp;int</code> |  | 右坐标（bar 索引或 UNIX 时间）。 |
| `bottom` | <code>series&nbsp;float</code> |  | 底部坐标（价格）。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的边框颜色。 |
| `border_width` | <code>series&nbsp;int</code> | `1` | 边框宽度（以像素为单位）。 |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 边框线样式。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 扩展模式：extend.none、extend.left、extend.right或extend.both。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的背景颜色。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `""` | 框的文本内容。 |
| `text_size` | <code>series&nbsp;int</code> | `0` | 文本大小（以像素为单位）。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字颜色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | 水平文本对齐方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本对齐方式。 |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | 文本换行模式。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字体系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则该框将呈现在顶部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式选项。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code>

</div>

<div v-show="_s0 === 1">

创建一个新的盒子对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `left` | <code>series&nbsp;int</code> |  | 左坐标（bar 索引或 UNIX 时间）。 |
| `top` | <code>series&nbsp;float</code> |  | 顶部坐标（价格）。 |
| `right` | <code>series&nbsp;int</code> |  | 右坐标（bar 索引或 UNIX 时间）。 |
| `bottom` | <code>series&nbsp;float</code> |  | 底部坐标（价格）。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的边框颜色。 |
| `border_width` | <code>series&nbsp;int</code> | `1` | 边框宽度（以像素为单位）。 |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 边框线样式。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 扩展模式：extend.none、extend.left、extend.right或extend.both。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的背景颜色。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `""` | 框的文本内容。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 文本大小作为命名常量。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字颜色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | 水平文本对齐方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本对齐方式。 |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | 文本换行模式。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字体系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则该框将呈现在顶部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式选项。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code>

</div>

<div v-show="_s0 === 2">

创建一个新的盒子对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `top_left` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定左上角的 <code>chart.point</code> 对象。 |
| `bottom_right` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定右下角的 <code>chart.point</code> 对象。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的边框颜色。 |
| `border_width` | <code>series&nbsp;int</code> | `1` | 边框宽度（以像素为单位）。 |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 边框线样式。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 扩展模式：extend.none、extend.left、extend.right或extend.both。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的背景颜色。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `""` | 框的文本内容。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 文本大小（以像素为单位）。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字颜色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | 水平文本对齐方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本对齐方式。 |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | 文本换行模式。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字体系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则该框将呈现在顶部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式选项。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code>

</div>

<div v-show="_s0 === 3">

创建一个新的盒子对象。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `top_left` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定左上角的 <code>chart.point</code> 对象。 |
| `bottom_right` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定右下角的 <code>chart.point</code> 对象。 |
| `border_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的边框颜色。 |
| `border_width` | <code>series&nbsp;int</code> | `1` | 边框宽度（以像素为单位）。 |
| `border_style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineStyle">LineStyle</a></code> | `LineStyle.Solid` | 边框线样式。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Extend">Extend</a></code> | `Extend.None` | 扩展模式：extend.none、extend.left、extend.right或extend.both。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> | `XLoc.BarIndex` | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |
| `bg_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLUE` | 框的背景颜色。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `""` | 框的文本内容。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> | `Size.Auto` | 文本大小作为命名常量。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> | `Color.BLACK` | 文字颜色。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Right` | 水平文本对齐方式。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> | `TextVAlign.Center` | 垂直文本对齐方式。 |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextWrap">TextWrap</a></code> | `TextWrap.None` | 文本换行模式。 |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | 文本的字体系列。 |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | 如果为 true，则该框将呈现在顶部。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `TextFormat.NONE` | 文本格式选项。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code>

</div>

## 静态属性

### all {#all}

**类型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a>&gt;</code>

返回一个数组，其中填充了脚本绘制的所有当前框。

## 方法

### copy {#copy}

```navi
Box.copy(id: series Box): series Box
```

创建指定框的拷贝并返回其 id。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要复制的框。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code>

---

### delete {#delete}

```navi
Box.delete(id: series Box)
```

从图表中删除指定的框。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要删除的框。 |

---

### get_bottom {#get_bottom}

```navi
Box.get_bottom(id: series Box): series float
```

返回盒子底部边框的价格值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 从中获取底部坐标的框。 |

**返回:** <code>series&nbsp;float</code>

---

### get_left {#get_left}

```navi
Box.get_left(id: series Box): series int
```

返回框左边框的 bar 索引或 UNIX 时间（取决于用于“xloc”的最后一个值）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 从中获取左坐标的框。 |

**返回:** <code>series&nbsp;int</code>

---

### get_right {#get_right}

```navi
Box.get_right(id: series Box): series int
```

返回框右边框的 bar 索引或 UNIX 时间（取决于用于“xloc”的最后一个值）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 从中获取正确坐标的框。 |

**返回:** <code>series&nbsp;int</code>

---

### get_top {#get_top}

```navi
Box.get_top(id: series Box): series float
```

返回盒子上边框的价格值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 从中获取顶部坐标的框。 |

**返回:** <code>series&nbsp;float</code>

---

### set_bg_color {#set_bg_color}

```navi
Box.set_bg_color(id: series Box, color: series Color)
```

设置框的背景颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 新的背景颜色。 |

---

### set_border_color {#set_border_color}

```navi
Box.set_border_color(id: series Box, color: series Color)
```

设置框的边框颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 新的边框颜色。 |

---

### set_border_style {#set_border_style}

```navi
Box.set_border_style(id: series Box, style: series LineStyle)
```

设置框的边框样式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/LineStyle">LineStyle</a></code> |  | 新的边框线样式。 |

---

### set_border_width {#set_border_width}

```navi
Box.set_border_width(id: series Box, width: series int)
```

设置框的边框宽度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `width` | <code>series&nbsp;int</code> |  | 新的边框宽度（以像素为单位）。 |

---

### set_bottom {#set_bottom}

```navi
Box.set_bottom(id: series Box, bottom: series float)
```

设置框的底部坐标。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `bottom` | <code>series&nbsp;float</code> |  | 新的底部坐标（价格）。 |

---

### set_bottom_right_point {#set_bottom_right_point}

```navi
Box.set_bottom_right_point(id: series Box, point: series chart.Point)
```

使用 `chart.point` 对象设置框的右下角。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定新右下角的 `chart.point` 对象。 |

---

### set_extend {#set_extend}

```navi
Box.set_extend(id: series Box, extend: series Extend)
```

设置此框对象边框的扩展类型。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `extend` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Extend">Extend</a></code> |  | 扩展模式：extend.none、extend.left、extend.right或extend.both。 |

---

### set_left {#set_left}

```navi
Box.set_left(id: series Box, left: series int)
```

设置框的左坐标。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `left` | <code>series&nbsp;int</code> |  | 新的左坐标（bar 索引或 UNIX 时间）。 |

---

### set_left_top {#set_left_top}

```navi
Box.set_left_top(id: series Box, left: series int, top: series float)
```

设置框的左侧和顶部坐标。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `left` | <code>series&nbsp;int</code> |  | 新的左坐标（bar 索引或 UNIX 时间）。 |
| `top` | <code>series&nbsp;float</code> |  | 新的顶部坐标（价格）。 |

---

### set_right {#set_right}

```navi
Box.set_right(id: series Box, right: series int)
```

设置框的右坐标。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `right` | <code>series&nbsp;int</code> |  | 新的右坐标（bar 索引或 UNIX 时间）。 |

---

### set_right_bottom {#set_right_bottom}

```navi
Box.set_right_bottom(id: series Box, right: series int, bottom: series float)
```

设置框的右侧和底部坐标。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `right` | <code>series&nbsp;int</code> |  | 新的右坐标（bar 索引或 UNIX 时间）。 |
| `bottom` | <code>series&nbsp;float</code> |  | 新的底部坐标（价格）。 |

---

### set_text {#set_text}

```navi
Box.set_text(id: series Box, text: series String)
```

设置框的文本大小。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 新的文本内容。 |

---

### set_text_color {#set_text_color}

```navi
Box.set_text_color(id: series Box, text_color: series Color)
```

设置框的文本颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_color` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Color">Color</a></code> |  | 新的文本颜色。 |

---

### set_text_font_family {#set_text_font_family}

```navi
Box.set_text_font_family(id: series Box, font_family: series String)
```

设置框文本的字体系列。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 字体系列：FontFamily.Default 或 FontFamily.Monospace。 |

---

### set_text_formatting {#set_text_formatting}

```navi
Box.set_text_formatting(id: series Box, text_formatting: const TextFormat)
```

设置框的文本格式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  | 文本格式选项。 |

---

### set_text_halign {#set_text_halign}

```navi
Box.set_text_halign(id: series Box, text_halign: series TextHAlign)
```

设置框文本的水平对齐方式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_halign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> |  | 水平文本对齐方式：TextHAlign.Left、TextHAlign.Center 或 TextHAlign.Right。 |

---

### set_text_size {#set_text_size}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Box.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">set_text_size</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Box, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Box.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">set_text_size</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Box, text_size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size)</span>"]' />

<div v-show="_s1 === 0">

设置框的文本大小。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_size` | <code>series&nbsp;int</code> |  | 新的文本大小（以像素为单位）。 |

</div>

<div v-show="_s1 === 1">

设置框的文本大小。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_size` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Size">Size</a></code> |  | 新的文本大小作为命名常量（Size.Tiny、Size.Small、Size.Normal、Size.Large、Size.Huge）。 |

</div>

---

### set_text_valign {#set_text_valign}

```navi
Box.set_text_valign(id: series Box, text_valign: series TextVAlign)
```

设置框文本的垂直对齐方式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_valign` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextVAlign">TextVAlign</a></code> |  | 垂直文本对齐方式：text.align_top、TextHAlign.Center 或 text.align_bottom。 |

---

### set_text_wrap {#set_text_wrap}

```navi
Box.set_text_wrap(id: series Box, text_wrap: series TextWrap)
```

设置框的文本环绕模式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `text_wrap` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/TextWrap">TextWrap</a></code> |  | 文本换行模式：text.wrap_none 或 text.wrap_auto。 |

---

### set_top {#set_top}

```navi
Box.set_top(id: series Box, top: series float)
```

设置框的顶部坐标。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `top` | <code>series&nbsp;float</code> |  | 新的顶部坐标（价格）。 |

---

### set_top_left_point {#set_top_left_point}

```navi
Box.set_top_left_point(id: series Box, point: series chart.Point)
```

使用 `chart.point` 对象设置框的左上角。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/chart/Point">chart.Point</a></code> |  | 指定新左上角的 `chart.point` 对象。 |

---

### set_xloc {#set_xloc}

```navi
Box.set_xloc(
    id: series Box,
    left: series int,
    right: series int,
    xloc: series XLoc
  )
```

设置框的左边框和右边框并更新其 xloc 属性。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Box">Box</a></code> |  | 要修改的框。 |
| `left` | <code>series&nbsp;int</code> |  | 新的左坐标（bar 索引或 UNIX 时间）。 |
| `right` | <code>series&nbsp;int</code> |  | 新的右坐标（bar 索引或 UNIX 时间）。 |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/XLoc">XLoc</a></code> |  | x 位置类型：xloc.bar_index 或 xloc.bar_time。 |
