<script setup lang="ts">
/**
 * Render the inline SVG icon for a given tool name.
 *
 * Centralised here so DrawingToolbar's flyout list and the sidebar's
 * "head of category" button render the same artwork without duplication.
 * Unknown names render an empty `<svg>` rather than throwing.
 */

defineProps<{ name: string }>()
</script>

<template>
  <svg class="tool-icon" viewBox="0 0 16 16" aria-hidden="true">
    <!-- Pointer -->
    <path
      v-if="name === 'pointer'"
      d="M3 2 L3 13 L6.2 10.2 L8 14 L10 13 L8.2 9.5 L12.5 9.5 Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.8"
      stroke-linejoin="round"
    />
    <!-- Lines -->
    <template v-else-if="name === 'trendline'">
      <line x1="2.5" y1="13.5" x2="13.5" y2="2.5" />
      <circle cx="2.5" cy="13.5" r="1.4" fill="var(--vp-c-bg, #1e1e2e)" />
      <circle cx="13.5" cy="2.5" r="1.4" fill="var(--vp-c-bg, #1e1e2e)" />
    </template>
    <template v-else-if="name === 'ray'">
      <line x1="2.5" y1="13.5" x2="13" y2="3" />
      <circle cx="2.5" cy="13.5" r="1.4" fill="var(--vp-c-bg, #1e1e2e)" />
      <path d="M11.2 2.6 L13.6 2.4 L13.4 4.8 Z" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'extended-line'">
      <line x1="1.5" y1="14.5" x2="14.5" y2="1.5" />
      <path d="M0.4 13.6 L2.6 15.6 L1.4 13 Z" fill="currentColor" stroke="none" />
      <path d="M13.4 0.4 L15.6 2.4 L14 1 Z" fill="currentColor" stroke="none" />
    </template>
    <line v-else-if="name === 'hline'" x1="1" y1="8" x2="15" y2="8" />
    <template v-else-if="name === 'hray'">
      <line x1="2.5" y1="8" x2="13" y2="8" />
      <circle cx="2.5" cy="8" r="1.4" fill="var(--vp-c-bg, #1e1e2e)" />
      <path d="M11.5 5.5 L14 8 L11.5 10.5 Z" fill="currentColor" stroke="none" />
    </template>
    <line v-else-if="name === 'vline'" x1="8" y1="1" x2="8" y2="15" />
    <template v-else-if="name === 'crossline'">
      <line x1="1" y1="8" x2="15" y2="8" />
      <line x1="8" y1="1" x2="8" y2="15" />
    </template>
    <template v-else-if="name === 'info-line'">
      <line x1="2" y1="13" x2="10" y2="5" />
      <circle cx="13" cy="4" r="2.5" fill="none" />
      <line x1="13" y1="3" x2="13" y2="3.4" stroke-linecap="round" />
      <line x1="13" y1="4.4" x2="13" y2="5.4" stroke-linecap="round" />
    </template>
    <template v-else-if="name === 'trend-angle'">
      <line x1="2" y1="14" x2="14" y2="14" />
      <line x1="2" y1="14" x2="13" y2="3" />
      <path d="M5.5 14 A 3.5 3.5 0 0 0 8 11.5" fill="none" />
    </template>
    <template v-else-if="name === 'parallel-channel'">
      <line x1="2" y1="12" x2="13" y2="4" />
      <line x1="3" y1="14" x2="14" y2="6" />
    </template>
    <!-- Shapes -->
    <rect
      v-else-if="name === 'rect'"
      x="2.5"
      y="3.5"
      width="11"
      height="9"
      rx="0.5"
      fill="none"
    />
    <circle v-else-if="name === 'circle'" cx="8" cy="8" r="5.5" fill="none" />
    <ellipse v-else-if="name === 'ellipse'" cx="8" cy="8" rx="6" ry="4" fill="none" />
    <path v-else-if="name === 'triangle'" d="M8 3 L13 13 L3 13 Z" fill="none" />
    <template v-else-if="name === 'polyline'">
      <polyline points="2,12 6,5 9,9 13,3" fill="none" />
      <circle cx="2" cy="12" r="1.2" fill="currentColor" />
      <circle cx="6" cy="5" r="1.2" fill="currentColor" />
      <circle cx="9" cy="9" r="1.2" fill="currentColor" />
      <circle cx="13" cy="3" r="1.2" fill="currentColor" />
    </template>
    <!-- Brushes -->
    <path
      v-else-if="name === 'brush'"
      d="M2 13 Q4 6 8 8 Q12 10 14 3"
      fill="none"
      stroke-linecap="round"
      stroke-width="1.6"
    />
    <template v-else-if="name === 'highlighter'">
      <path
        d="M2 12 L13 4"
        fill="none"
        stroke-width="4"
        stroke-linecap="round"
        opacity="0.4"
      />
      <path d="M2 12 L13 4" fill="none" stroke-width="1" />
    </template>
    <!-- Arrows -->
    <template v-else-if="name === 'arrow'">
      <line x1="2.5" y1="13.5" x2="12" y2="4" />
      <path d="M9.5 3.5 L13 3 L12.5 6.5 Z" fill="currentColor" stroke="none" />
    </template>
    <path
      v-else-if="name === 'arrow-mark-up'"
      d="M8 2.5 L13 9 L10 9 L10 13.5 L6 13.5 L6 9 L3 9 Z"
      fill="currentColor"
      stroke="none"
    />
    <path
      v-else-if="name === 'arrow-mark-down'"
      d="M8 13.5 L3 7 L6 7 L6 2.5 L10 2.5 L10 7 L13 7 Z"
      fill="currentColor"
      stroke="none"
    />
    <template v-else-if="name === 'arrow-marker'">
      <line x1="3" y1="3" x2="11" y2="11" />
      <path d="M9 12.5 L12.5 12.5 L12.5 9 Z" fill="currentColor" stroke="none" />
    </template>
    <!-- Position panels -->
    <template v-else-if="name === 'long-position'">
      <rect x="2.5" y="3" width="11" height="4" fill="rgba(46,160,67,0.5)" stroke="none" />
      <rect x="2.5" y="8" width="11" height="4" fill="rgba(207,34,46,0.5)" stroke="none" />
      <line x1="2.5" y1="3" x2="13.5" y2="3" />
      <line x1="2.5" y1="7.5" x2="13.5" y2="7.5" />
      <line x1="2.5" y1="12" x2="13.5" y2="12" />
    </template>
    <template v-else-if="name === 'short-position'">
      <rect x="2.5" y="8" width="11" height="4" fill="rgba(46,160,67,0.5)" stroke="none" />
      <rect x="2.5" y="3" width="11" height="4" fill="rgba(207,34,46,0.5)" stroke="none" />
      <line x1="2.5" y1="3" x2="13.5" y2="3" />
      <line x1="2.5" y1="7.5" x2="13.5" y2="7.5" />
      <line x1="2.5" y1="12" x2="13.5" y2="12" />
    </template>
    <!-- Measurements -->
    <template v-else-if="name === 'price-range'">
      <line x1="2" y1="4" x2="14" y2="4" />
      <line x1="2" y1="12" x2="14" y2="12" />
      <line x1="8" y1="4" x2="8" y2="12" />
    </template>
    <template v-else-if="name === 'date-range'">
      <line x1="4" y1="2" x2="4" y2="14" />
      <line x1="12" y1="2" x2="12" y2="14" />
      <line x1="4" y1="8" x2="12" y2="8" />
    </template>
    <template v-else-if="name === 'date-and-price-range'">
      <rect x="3" y="3" width="10" height="10" fill="none" />
      <line x1="3" y1="8" x2="13" y2="8" stroke-dasharray="1,1.5" />
      <line x1="8" y1="3" x2="8" y2="13" stroke-dasharray="1,1.5" />
    </template>
    <!-- Channels -->
    <template v-else-if="name === 'flat-top-bottom'">
      <line x1="2" y1="4" x2="14" y2="4" />
      <line x1="2" y1="12" x2="14" y2="12" />
    </template>
    <template v-else-if="name === 'disjoint-channel'">
      <line x1="2" y1="13" x2="14" y2="3" />
      <line x1="2" y1="9" x2="14" y2="6" />
    </template>
    <template v-else-if="name === 'regression-trend'">
      <line x1="2" y1="13" x2="14" y2="3" />
      <line x1="2" y1="11" x2="14" y2="1" stroke-dasharray="1,1.5" />
      <line x1="2" y1="15" x2="14" y2="5" stroke-dasharray="1,1.5" />
    </template>
    <!-- Curves -->
    <template v-else-if="name === 'path'">
      <path d="M2 13 Q 5 4 8 8 T 14 5" fill="none" />
      <circle cx="2" cy="13" r="1.2" fill="currentColor" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
      <circle cx="14" cy="5" r="1.2" fill="currentColor" />
    </template>
    <template v-else-if="name === 'arc'">
      <path d="M2 13 Q 8 1 14 13" fill="none" />
    </template>
    <template v-else-if="name === 'curve'">
      <path d="M2 13 Q 8 2 14 13" fill="none" />
      <circle cx="2" cy="13" r="1.2" fill="currentColor" />
      <circle cx="14" cy="13" r="1.2" fill="currentColor" />
      <circle cx="8" cy="2" r="1.2" fill="none" stroke="currentColor" />
    </template>
    <template v-else-if="name === 'double-curve'">
      <path d="M2 13 Q 5 2 8 8 Q 11 14 14 3" fill="none" />
    </template>
    <!-- Cyclic -->
    <template v-else-if="name === 'cyclic-lines'">
      <line x1="3" y1="2" x2="3" y2="14" />
      <line x1="7" y1="2" x2="7" y2="14" />
      <line x1="11" y1="2" x2="11" y2="14" />
      <line x1="15" y1="2" x2="15" y2="14" opacity="0.4" />
    </template>
    <template v-else-if="name === 'time-cycles'">
      <path d="M1 12 Q 4 5 7 12 Q 10 5 13 12 Q 14.5 8 15 12" fill="none" />
    </template>
    <template v-else-if="name === 'sine-line'">
      <path d="M2 8 Q 4 2 6 8 T 10 8 T 14 8" fill="none" />
    </template>
    <!-- Text & symbols -->
    <text
      v-else-if="name === 'text'"
      x="8"
      y="12"
      text-anchor="middle"
      font-family="serif"
      font-size="13"
      font-weight="bold"
      fill="currentColor"
      stroke="none"
    >T</text>
    <template v-else-if="name === 'note'">
      <line x1="2" y1="3" x2="8" y2="6" />
      <rect x="8" y="4" width="6" height="7" fill="none" />
      <line x1="9.5" y1="6.5" x2="12.5" y2="6.5" />
      <line x1="9.5" y1="8.7" x2="11.8" y2="8.7" />
    </template>
    <template v-else-if="name === 'callout'">
      <rect x="2" y="2" width="9" height="7" rx="1" fill="none" />
      <path d="M5 9 L7 13 L9 9 Z" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'price-note' || name === 'price-label'">
      <line x1="2.5" y1="3" x2="7.5" y2="6" />
      <rect x="7.5" y="4" width="6.5" height="7" fill="none" />
      <text
        x="10.75"
        y="7.2"
        text-anchor="middle"
        font-size="3.2"
        fill="currentColor"
        stroke="none"
      >12</text>
    </template>
    <text
      v-else-if="name === 'emoji'"
      x="8"
      y="12"
      text-anchor="middle"
      font-size="11"
      stroke="none"
    >☺</text>
    <!-- Fib retracement: horizontal levels between two anchors -->
    <template v-else-if="name === 'fib-retracement'">
      <line x1="2" y1="3" x2="14" y2="3" />
      <line x1="2" y1="6" x2="14" y2="6" />
      <line x1="2" y1="9" x2="14" y2="9" />
      <line x1="2" y1="12" x2="14" y2="12" />
    </template>
    <template v-else-if="name === 'fib-trend-based-extension'">
      <line x1="2" y1="14" x2="8" y2="3" />
      <line x1="8" y1="3" x2="14" y2="9" />
      <line x1="2" y1="11" x2="14" y2="11" />
      <line x1="2" y1="6" x2="14" y2="6" />
    </template>
    <!-- Fib channel: two parallel lines + diagonal -->
    <template v-else-if="name === 'fib-channel'">
      <line x1="2" y1="13" x2="14" y2="3" />
      <line x1="2" y1="10" x2="14" y2="0.5" />
      <line x1="2" y1="7" x2="14" y2="-2" />
    </template>
    <!-- Fib time zone: vertical fib-spaced lines -->
    <template v-else-if="name === 'fib-timezone'">
      <line x1="3" y1="2" x2="3" y2="14" />
      <line x1="5" y1="2" x2="5" y2="14" />
      <line x1="8" y1="2" x2="8" y2="14" />
      <line x1="13" y1="2" x2="13" y2="14" />
    </template>
    <!-- Fib trend-based time: zigzag trend line + projected vertical lines -->
    <template v-else-if="name === 'fib-trend-based-time'">
      <line x1="2" y1="12" x2="6" y2="5" />
      <line x1="6" y1="5" x2="9" y2="9" />
      <line x1="9" y1="2" x2="9" y2="14" />
      <line x1="13" y1="2" x2="13" y2="14" />
    </template>
    <!-- Fib fan: rays from a corner -->
    <template v-else-if="name === 'fib-fan'">
      <line x1="2" y1="14" x2="14" y2="2" />
      <line x1="2" y1="14" x2="14" y2="6" />
      <line x1="2" y1="14" x2="14" y2="10" />
      <line x1="2" y1="14" x2="14" y2="14" />
    </template>
    <!-- Fib circles: concentric -->
    <template v-else-if="name === 'fib-circles'">
      <circle cx="8" cy="8" r="2" />
      <circle cx="8" cy="8" r="4" />
      <circle cx="8" cy="8" r="6" />
    </template>
    <!-- Fib arcs: concentric upper-half arcs -->
    <template v-else-if="name === 'fib-arcs'">
      <path d="M3 12 A 5 5 0 0 1 13 12" />
      <path d="M5 12 A 3 3 0 0 1 11 12" />
      <path d="M7 12 A 1 1 0 0 1 9 12" />
      <line x1="2" y1="12" x2="14" y2="12" />
    </template>
    <!-- Fib wedge: rays converging from a corner -->
    <template v-else-if="name === 'fib-wedge'">
      <line x1="2" y1="14" x2="14" y2="2" />
      <line x1="2" y1="14" x2="14" y2="6" />
      <line x1="2" y1="14" x2="14" y2="10" />
      <line x1="2" y1="14" x2="14" y2="14" />
      <line x1="14" y1="2" x2="14" y2="14" />
    </template>
    <!-- Fib spiral: golden-ratio spiral -->
    <template v-else-if="name === 'fib-spiral'">
      <path d="M8 8 m 0 -2 a 2 2 0 0 1 0 4 a 3 3 0 0 1 0 -6 a 4 4 0 0 1 0 8 a 5 5 0 0 1 0 -10" />
    </template>
    <!-- Pitchfork: median + two parallels -->
    <template v-else-if="name === 'pitchfork'">
      <line x1="2" y1="13" x2="14" y2="3" />
      <line x1="2" y1="14" x2="14" y2="6" />
      <line x1="2" y1="11" x2="14" y2="1" />
      <circle cx="2" cy="13" r="1" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'schiff-pitchfork'">
      <line x1="3" y1="12" x2="14" y2="3" />
      <line x1="3" y1="14" x2="14" y2="6" />
      <line x1="3" y1="10" x2="14" y2="1" />
      <circle cx="2" cy="14" r="1" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'modified-schiff-pitchfork'">
      <line x1="5" y1="14" x2="14" y2="3" />
      <line x1="5" y1="14" x2="14" y2="6" />
      <line x1="5" y1="14" x2="14" y2="0" />
      <circle cx="2" cy="14" r="1" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'inside-pitchfork'">
      <line x1="4" y1="11" x2="14" y2="3" />
      <line x1="4" y1="13" x2="14" y2="6" />
      <line x1="4" y1="9" x2="14" y2="1" />
      <circle cx="2" cy="14" r="1" fill="currentColor" stroke="none" />
    </template>
    <!-- Pitchfan: rays fanning out symmetrically from p0 -->
    <template v-else-if="name === 'pitchfan'">
      <line x1="2" y1="14" x2="14" y2="2" />
      <line x1="2" y1="14" x2="14" y2="6" />
      <line x1="2" y1="14" x2="14" y2="10" />
      <line x1="2" y1="14" x2="14" y2="14" />
      <line x1="2" y1="14" x2="10" y2="2" />
      <line x1="2" y1="14" x2="6" y2="2" />
      <circle cx="2" cy="14" r="1" fill="currentColor" stroke="none" />
    </template>
    <!-- Gann box: rectangle with diagonals + subdivisions -->
    <template v-else-if="name === 'gann-box'">
      <rect x="2" y="3" width="12" height="10" />
      <line x1="2" y1="13" x2="14" y2="3" />
      <line x1="8" y1="3" x2="8" y2="13" />
      <line x1="2" y1="8" x2="14" y2="8" />
    </template>
    <template v-else-if="name === 'gann-square'">
      <rect x="3" y="3" width="10" height="10" />
      <line x1="3" y1="13" x2="13" y2="3" />
      <line x1="3" y1="3" x2="13" y2="13" />
    </template>
    <template v-else-if="name === 'gann-square-fixed'">
      <rect x="3" y="3" width="10" height="10" />
      <line x1="3" y1="13" x2="13" y2="3" />
      <line x1="3" y1="3" x2="13" y2="13" />
      <line x1="3" y1="8" x2="13" y2="8" />
      <line x1="8" y1="3" x2="8" y2="13" />
    </template>
    <!-- Gann fan: rays at canonical Gann angles -->
    <template v-else-if="name === 'gann-fan'">
      <line x1="2" y1="14" x2="14" y2="2" />
      <line x1="2" y1="14" x2="14" y2="6" />
      <line x1="2" y1="14" x2="14" y2="10" />
      <line x1="2" y1="14" x2="14" y2="14" />
      <line x1="2" y1="14" x2="6" y2="2" />
      <line x1="2" y1="14" x2="10" y2="2" />
    </template>
    <!-- Rotated rectangle -->
    <polygon v-else-if="name === 'rotated-rect'" points="2,10 6,2 14,6 10,14" />
    <!-- Chart Patterns -->
    <template v-else-if="name === 'xabcd-pattern'">
      <polyline points="2,13 5,4 9,11 12,3 14,9" />
      <circle cx="2" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="4" r="1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="9" r="1" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'cypher-pattern'">
      <polyline points="2,13 5,4 9,10 12,4 14,8" />
      <circle cx="2" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="4" r="1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="8" r="1" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'abcd-pattern'">
      <polyline points="2,13 5,4 11,11 14,4" />
      <circle cx="2" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="4" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="4" r="1" fill="currentColor" stroke="none" />
    </template>
    <!-- Head & shoulders: two shoulders + head peak -->
    <polyline v-else-if="name === 'head-and-shoulders'" points="2,12 4,8 6,11 8,3 10,11 12,8 14,12" />
    <!-- Triangle pattern: two converging trendlines -->
    <template v-else-if="name === 'triangle-pattern'">
      <line x1="2" y1="4" x2="14" y2="8" />
      <line x1="2" y1="12" x2="14" y2="8" />
    </template>
    <template v-else-if="name === 'three-drives-pattern'">
      <polyline points="2,13 4,8 7,11 9,4 12,8 14,3" />
      <circle cx="2" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="7" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="3" r="1" fill="currentColor" stroke="none" />
    </template>
    <!-- Elliott Waves -->
    <!-- Impulse: 0→1 up, 1→2 down, 2→3 up (highest), 3→4 down, 4→5 up -->
    <polyline v-else-if="name === 'elliott-impulse-wave'" points="2,14 5,5 7,9 10,2 12,6 14,4" />
    <!-- Corrective: 0→A down, A→B up, B→C down -->
    <polyline v-else-if="name === 'elliott-corrective-wave'" points="2,4 6,11 10,7 14,13" />
    <!-- Triangle wave: 6-point converging -->
    <polyline v-else-if="name === 'elliott-triangle-wave'" points="2,4 5,12 8,6 10,12 12,7 14,10" />
    <!-- Double combo: 5-point W-X-Y -->
    <polyline v-else-if="name === 'elliott-double-combo'" points="2,13 5,5 8,10 11,3 14,8" />
    <!-- Triple combo: 7-point W-X-Y-X'-Z-E -->
    <polyline v-else-if="name === 'elliott-triple-combo'" points="2,13 4,5 6,10 8,3 10,8 12,2 14,6" />
    <!-- Volume Profile & Forecast -->
    <!-- Anchored VWAP: curved line with anchor dot -->
    <template v-else-if="name === 'anchored-vwap'">
      <path d="M2,13 Q5,10 8,7 T14,4" />
      <circle cx="2" cy="13" r="1.5" fill="currentColor" stroke="none" />
    </template>
    <!-- Volume profile fixed range: two vertical markers + horizontal bars -->
    <template v-else-if="name === 'volume-profile-fixed-range'">
      <line x1="3" y1="2" x2="3" y2="14" />
      <line x1="13" y1="2" x2="13" y2="14" />
      <rect x="9" y="4" width="4" height="2" fill="currentColor" stroke="none" opacity="0.7" />
      <rect x="7" y="7" width="6" height="2" fill="currentColor" stroke="none" opacity="0.7" />
      <rect x="10" y="10" width="3" height="2" fill="currentColor" stroke="none" opacity="0.7" />
    </template>
    <!-- Volume profile anchored: VWAP curve + histogram -->
    <template v-else-if="name === 'volume-profile-anchored'">
      <path d="M2,13 Q5,10 8,7 T14,4" />
      <circle cx="2" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <rect x="10" y="4" width="3" height="1.5" fill="currentColor" stroke="none" opacity="0.7" />
      <rect x="9" y="7" width="4" height="1.5" fill="currentColor" stroke="none" opacity="0.7" />
      <rect x="11" y="10" width="2" height="1.5" fill="currentColor" stroke="none" opacity="0.7" />
    </template>
    <!-- Position forecast: filled cone from left point to two right corners -->
    <path
      v-else-if="name === 'position-forecast'"
      d="M2,8 L14,3 L14,13 Z"
      fill="currentColor"
      opacity="0.35"
      stroke="currentColor"
      stroke-width="1.2"
    />
    <!-- Bar pattern: full-height highlighted rectangle -->
    <template v-else-if="name === 'bar-pattern'">
      <rect x="5" y="2" width="6" height="12" fill="currentColor" opacity="0.2" stroke="currentColor" />
      <line x1="5" y1="2" x2="5" y2="14" />
      <line x1="11" y1="2" x2="11" y2="14" />
    </template>
    <!-- Ghost feed: dashed diagonal + anchor dot -->
    <template v-else-if="name === 'ghost-feed'">
      <line x1="2" y1="13" x2="14" y2="3" stroke-dasharray="2,2" />
      <circle cx="2" cy="13" r="1.5" fill="currentColor" stroke="none" />
    </template>
    <!-- Sector: pie-slice wedge -->
    <path v-else-if="name === 'sector'" d="M8,8 L14,8 A6,6,0,0,0,8,2 Z" />
  </svg>
</template>

<style scoped>
.tool-icon {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
