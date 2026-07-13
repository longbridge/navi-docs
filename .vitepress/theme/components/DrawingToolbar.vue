<script setup lang="ts">
/**
 * Vertical sidebar of chart-interaction tools.
 *
 * Each entry on the sidebar is either a single tool (Pointer) or a
 * "category" — clicking the category opens a flyout panel listing every
 * tool in that category, organised into sub-sections (Lines / Channels /
 * etc.). The sidebar shows the most recently selected tool from each
 * category as the icon, so the user can re-pick it with one click.
 *
 * Sticky utilities (Magnet, Sticky drawing) live below a separator at the
 * bottom of the sidebar.
 */

import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { onClickOutside } from '@vueuse/core'
import ToolIcon from './ToolIcon.vue'

type MagnetMode = 'off' | 'weak' | 'strong'

interface Props {
  activeTool: string
  magnetMode: MagnetMode
  snapToIndicators: boolean
  stickyTool: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'select', name: string): void
  (e: 'magnet', mode: MagnetMode): void
  (e: 'snap-to-indicators', value: boolean): void
  (e: 'sticky-tool', value: boolean): void
}>()

const { t } = useI18n()

/** Tooltip text for the magnet button, keyed by its current mode. */
const magnetTooltip = computed<Record<MagnetMode, string>>(() => ({
  off: t('playground.drawingToolbar.magnet.off'),
  weak: t('playground.drawingToolbar.magnet.weak'),
  strong: t('playground.drawingToolbar.magnet.strong'),
}))

/**
 * Tool labels live in `playground.drawingToolbar.tool.<kebab-id>` so the
 * categories array only needs the tool's stable id; the visible label and
 * its translations are owned by the i18n bundle.
 */
function toolLabel(name: string): string {
  return t(`playground.drawingToolbar.tool.${name}`)
}

interface ToolEntry {
  name: string
}
interface ToolSection {
  /** i18n key under `playground.drawingToolbar.section.`. */
  titleKey: string
  tools: ToolEntry[]
}
interface Category {
  id: string
  /** i18n key under `playground.drawingToolbar.category.`. */
  labelKey: string
  sections: ToolSection[]
}

const categories: Category[] = [
  {
    id: 'lines',
    labelKey: 'playground.drawingToolbar.category.lines',
    sections: [
      {
        titleKey: 'playground.drawingToolbar.section.lines',
        tools: [
          { name: 'trendline' },
          { name: 'ray' },
          { name: 'info-line' },
          { name: 'extended-line' },
          { name: 'trend-angle' },
          { name: 'hline' },
          { name: 'hray' },
          { name: 'vline' },
          { name: 'crossline' },
        ],
      },
      {
        titleKey: 'playground.drawingToolbar.section.channels',
        tools: [
          { name: 'parallel-channel' },
          { name: 'flat-top-bottom' },
          { name: 'disjoint-channel' },
          { name: 'regression-trend' },
        ],
      },
      {
        titleKey: 'playground.drawingToolbar.section.pitchfork',
        tools: [
          { name: 'pitchfork' },
          { name: 'schiff-pitchfork' },
          { name: 'modified-schiff-pitchfork' },
          { name: 'inside-pitchfork' },
          { name: 'pitchfan' },
        ],
      },
    ],
  },
  {
    id: 'shapes',
    labelKey: 'playground.drawingToolbar.category.shapes',
    sections: [
      {
        titleKey: 'playground.drawingToolbar.section.brushes',
        tools: [{ name: 'brush' }, { name: 'highlighter' }],
      },
      {
        titleKey: 'playground.drawingToolbar.section.arrows',
        tools: [
          { name: 'arrow' },
          { name: 'arrow-marker' },
          { name: 'arrow-mark-up' },
          { name: 'arrow-mark-down' },
        ],
      },
      {
        titleKey: 'playground.drawingToolbar.section.shapes',
        tools: [
          { name: 'rect' },
          { name: 'rotated-rect' },
          { name: 'circle' },
          { name: 'ellipse' },
          { name: 'triangle' },
          { name: 'polyline' },
        ],
      },
      {
        titleKey: 'playground.drawingToolbar.section.curves',
        tools: [
          { name: 'path' },
          { name: 'arc' },
          { name: 'curve' },
          { name: 'double-curve' },
        ],
      },
    ],
  },
  {
    id: 'fib',
    labelKey: 'playground.drawingToolbar.category.fib',
    sections: [
      {
        titleKey: 'playground.drawingToolbar.section.fibonacci',
        tools: [
          { name: 'fib-retracement' },
          { name: 'fib-trend-based-extension' },
          { name: 'fib-channel' },
          { name: 'fib-timezone' },
          { name: 'fib-fan' },
          { name: 'fib-trend-based-time' },
          { name: 'fib-circles' },
          { name: 'fib-arcs' },
          { name: 'fib-wedge' },
          { name: 'fib-spiral' },
        ],
      },
      {
        titleKey: 'playground.drawingToolbar.section.gann',
        tools: [
          { name: 'gann-box' },
          { name: 'gann-square' },
          { name: 'gann-square-fixed' },
          { name: 'gann-fan' },
        ],
      },
    ],
  },
  {
    id: 'patterns',
    labelKey: 'playground.drawingToolbar.category.patterns',
    sections: [
      {
        titleKey: 'playground.drawingToolbar.section.chartPatterns',
        tools: [
          { name: 'xabcd-pattern' },
          { name: 'cypher-pattern' },
          { name: 'abcd-pattern' },
          { name: 'head-and-shoulders' },
          { name: 'triangle-pattern' },
          { name: 'three-drives-pattern' },
        ],
      },
      {
        titleKey: 'playground.drawingToolbar.section.elliottWaves',
        tools: [
          { name: 'elliott-impulse-wave' },
          { name: 'elliott-corrective-wave' },
          { name: 'elliott-triangle-wave' },
          { name: 'elliott-double-combo' },
          { name: 'elliott-triple-combo' },
        ],
      },
      {
        titleKey: 'playground.drawingToolbar.section.cyclic',
        tools: [
          { name: 'cyclic-lines' },
          { name: 'time-cycles' },
          { name: 'sine-line' },
        ],
      },
    ],
  },
  {
    id: 'positions',
    labelKey: 'playground.drawingToolbar.category.positions',
    sections: [
      {
        titleKey: 'playground.drawingToolbar.section.positionPanels',
        tools: [{ name: 'long-position' }, { name: 'short-position' }],
      },
      {
        titleKey: 'playground.drawingToolbar.section.volumeProfile',
        tools: [
          { name: 'anchored-vwap' },
          { name: 'volume-profile-fixed-range' },
          { name: 'volume-profile-anchored' },
        ],
      },
      {
        titleKey: 'playground.drawingToolbar.section.measurements',
        tools: [
          { name: 'price-range' },
          { name: 'date-range' },
          { name: 'date-and-price-range' },
        ],
      },
      {
        titleKey: 'playground.drawingToolbar.section.forecastMisc',
        tools: [
          { name: 'position-forecast' },
          { name: 'bar-pattern' },
          { name: 'ghost-feed' },
          { name: 'sector' },
        ],
      },
    ],
  },
  {
    id: 'text',
    labelKey: 'playground.drawingToolbar.category.text',
    sections: [
      {
        titleKey: 'playground.drawingToolbar.section.textSymbols',
        tools: [
          { name: 'text' },
          { name: 'note' },
          { name: 'callout' },
          { name: 'price-note' },
          { name: 'emoji' },
        ],
      },
    ],
  },
]

/** Flat tool → category lookup. */
const toolToCategory: Record<string, string> = {}
for (const cat of categories) {
  for (const sec of cat.sections) {
    for (const t of sec.tools) toolToCategory[t.name] = cat.id
  }
}

/** Per-category "most recently selected tool" — drives which icon shows on
 *  the sidebar button. */
const categoryHead = ref<Record<string, string>>(
  Object.fromEntries(categories.map((c) => [c.id, c.sections[0].tools[0].name])),
)

function syncHead(tool: string) {
  const catId = toolToCategory[tool]
  if (catId) categoryHead.value[catId] = tool
}
syncHead(props.activeTool)
watch(
  () => props.activeTool,
  (t) => syncHead(t),
)

const openFlyout = ref<string | null>(null)
const sidebarRef = ref<HTMLDivElement | null>(null)
/**
 * Per-cat-wrap flyout element refs, set via Vue's `ref` callback prop. We
 * stash them by category id so [`adjustFlyoutPosition`] can find the one
 * currently open and shift it up if it would otherwise overflow the bottom
 * of the viewport.
 */
const flyoutEls = ref<Record<string, HTMLDivElement | null>>({})
function registerFlyoutEl(id: string) {
  return (el: Element | null) => {
    flyoutEls.value[id] = (el as HTMLDivElement | null) ?? null
  }
}

/** Vertical offset (px) applied to the open flyout via `style.top` to
 * shift it up when it would overflow the bottom of the viewport.
 * Positive values push the flyout down (default 0 = align top with cat-wrap). */
const flyoutOffsetY = ref(0)

/** Margin between the flyout's bottom edge and the viewport bottom when
 * we shift it up — keeps the menu away from the very edge of the screen. */
const FLYOUT_VIEWPORT_MARGIN = 8

function adjustFlyoutPosition() {
  const open = openFlyout.value
  if (!open) {
    flyoutOffsetY.value = 0
    return
  }
  const flyout = flyoutEls.value[open]
  const wrap = flyout?.parentElement
  if (!flyout || !wrap) {
    flyoutOffsetY.value = 0
    return
  }
  // Reset so we measure the natural geometry, not whatever offset we
  // applied last time.
  flyout.style.top = ''
  const wrapRect = wrap.getBoundingClientRect()
  const flyoutRect = flyout.getBoundingClientRect()
  const overflow =
    flyoutRect.bottom - (window.innerHeight - FLYOUT_VIEWPORT_MARGIN)
  if (overflow <= 0) {
    flyoutOffsetY.value = 0
    return
  }
  // Shift up by the overflow amount, but never above the viewport top
  // (otherwise tall menus on small windows would clip at the top instead).
  const maxShift = wrapRect.top - FLYOUT_VIEWPORT_MARGIN
  flyoutOffsetY.value = -Math.min(overflow, Math.max(maxShift, 0))
}

onClickOutside(sidebarRef, () => {
  openFlyout.value = null
  magnetMenuOpen.value = false
})

function toggleFlyout(id: string) {
  openFlyout.value = openFlyout.value === id ? null : id
  magnetMenuOpen.value = false
  if (openFlyout.value) {
    nextTick(adjustFlyoutPosition)
  } else {
    flyoutOffsetY.value = 0
  }
}

// Recompute the flyout offset on window resize so a category menu that was
// shifted up to fit re-aligns when the viewport grows, and vice versa. The
// listener is cheap (no work when no flyout is open) so we leave it
// registered for the component's lifetime.
function onWindowResize() {
  if (openFlyout.value) adjustFlyoutPosition()
}
onMounted(() => window.addEventListener('resize', onWindowResize))
onBeforeUnmount(() => window.removeEventListener('resize', onWindowResize))

function pickFromFlyout(name: string) {
  emit('select', name)
  openFlyout.value = null
}

const magnetMenuOpen = ref(false)
function toggleMagnetMenu() {
  magnetMenuOpen.value = !magnetMenuOpen.value
  openFlyout.value = null
}
function pickMagnetMode(next: MagnetMode) {
  emit('magnet', props.magnetMode === next ? 'off' : next)
  magnetMenuOpen.value = false
}
function toggleSnapToIndicators() {
  emit('snap-to-indicators', !props.snapToIndicators)
}
function toggleStickyTool() {
  emit('sticky-tool', !props.stickyTool)
}

const isPointerActive = computed(() => props.activeTool === 'pointer')
function isCategoryActive(catId: string): boolean {
  return toolToCategory[props.activeTool] === catId
}
</script>

<template>
  <div ref="sidebarRef" class="drawing-toolbar" role="toolbar" aria-label="Drawing tools">
    <button
      type="button"
      :class="['drawing-toolbar__btn', { 'drawing-toolbar__btn--active': isPointerActive }]"
      :title="t('playground.drawingToolbar.pointer')"
      :aria-label="t('playground.drawingToolbar.tool.pointer')"
      :aria-pressed="isPointerActive"
      @click="emit('select', 'pointer')"
    >
      <ToolIcon name="pointer" />
    </button>
    <div class="drawing-toolbar__sep" />

    <div
      v-for="cat in categories"
      :key="cat.id"
      class="drawing-toolbar__cat-wrap"
    >
      <!-- Main button: directly activates the last-used tool for this category -->
      <button
        type="button"
        :class="[
          'drawing-toolbar__btn',
          { 'drawing-toolbar__btn--active': isCategoryActive(cat.id) },
        ]"
        :title="toolLabel(categoryHead[cat.id])"
        :aria-label="toolLabel(categoryHead[cat.id])"
        @click="emit('select', categoryHead[cat.id]); openFlyout = null"
      >
        <ToolIcon :name="categoryHead[cat.id]" />
      </button>
      <!-- Expand arrow: separate button that opens the flyout -->
      <button
        type="button"
        class="drawing-toolbar__expand"
        :title="t('playground.drawingToolbar.moreTools', { label: t(cat.labelKey) })"
        :aria-label="t('playground.drawingToolbar.expand', { label: t(cat.labelKey) })"
        :aria-haspopup="'menu'"
        :aria-expanded="openFlyout === cat.id"
        @click.stop="toggleFlyout(cat.id)"
      >›</button>
      <div
        v-if="openFlyout === cat.id"
        :ref="registerFlyoutEl(cat.id)"
        class="cat-flyout"
        :style="{ top: `${flyoutOffsetY}px` }"
        role="menu"
        @keydown.esc="openFlyout = null"
      >
        <template v-for="sec in cat.sections" :key="sec.titleKey">
          <div class="cat-flyout__section-title">{{ t(sec.titleKey) }}</div>
          <button
            v-for="tool in sec.tools"
            :key="tool.name"
            type="button"
            role="menuitem"
            :class="[
              'cat-flyout__item',
              { 'cat-flyout__item--active': activeTool === tool.name },
            ]"
            @click="pickFromFlyout(tool.name)"
          >
            <ToolIcon :name="tool.name" />
            <span>{{ toolLabel(tool.name) }}</span>
          </button>
        </template>
      </div>
    </div>

    <div class="drawing-toolbar__sep" />

    <div class="drawing-toolbar__cat-wrap">
      <button
        type="button"
        :class="[
          'drawing-toolbar__btn',
          { 'drawing-toolbar__btn--active': magnetMode !== 'off' },
        ]"
        :title="magnetTooltip[magnetMode]"
        :aria-label="magnetTooltip[magnetMode]"
        :aria-haspopup="'menu'"
        :aria-expanded="magnetMenuOpen"
        :aria-pressed="magnetMode !== 'off'"
        @click="toggleMagnetMenu"
      >
        <svg class="drawing-toolbar__icon" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 3 V8 A5 5 0 0 0 13 8 V3" fill="none" />
          <path d="M3 3 H6 V8 A2 2 0 0 0 10 8 V3 H13" fill="none" />
          <rect x="2.5" y="2.5" width="4" height="2" fill="currentColor" stroke="none" />
          <rect x="9.5" y="2.5" width="4" height="2" fill="currentColor" stroke="none" />
          <template v-if="magnetMode === 'strong'">
            <path d="M5 10 L4 13 L6 13 L5 15.5" stroke-width="1.2" />
            <path d="M11 10 L10 13 L12 13 L11 15.5" stroke-width="1.2" />
          </template>
        </svg>
      </button>
      <div
        v-if="magnetMenuOpen"
        class="cat-flyout"
        role="menu"
        @keydown.esc="magnetMenuOpen = false"
      >
        <button
          type="button"
          role="menuitemradio"
          :aria-checked="magnetMode === 'weak'"
          :class="['cat-flyout__item', { 'cat-flyout__item--active': magnetMode === 'weak' }]"
          @click="pickMagnetMode('weak')"
        >
          <span>{{ t('playground.drawingToolbar.magnet.weakMenu') }}</span>
        </button>
        <button
          type="button"
          role="menuitemradio"
          :aria-checked="magnetMode === 'strong'"
          :class="['cat-flyout__item', { 'cat-flyout__item--active': magnetMode === 'strong' }]"
          @click="pickMagnetMode('strong')"
        >
          <span>{{ t('playground.drawingToolbar.magnet.strongMenu') }}</span>
        </button>
        <div class="cat-flyout__sep" />
        <button
          type="button"
          role="menuitemcheckbox"
          :aria-checked="snapToIndicators"
          class="cat-flyout__item cat-flyout__item--toggle"
          @click="toggleSnapToIndicators"
        >
          <span>{{ t('playground.drawingToolbar.magnet.snapToIndicators') }}</span>
          <span :class="['cat-flyout__switch', { 'cat-flyout__switch--on': snapToIndicators }]">
            <span class="cat-flyout__switch-knob" />
          </span>
        </button>
      </div>
    </div>

    <button
      type="button"
      :class="['drawing-toolbar__btn', { 'drawing-toolbar__btn--active': stickyTool }]"
      :title="
        stickyTool
          ? t('playground.drawingToolbar.sticky.on')
          : t('playground.drawingToolbar.sticky.off')
      "
      :aria-label="
        stickyTool
          ? t('playground.drawingToolbar.sticky.disable')
          : t('playground.drawingToolbar.sticky.enable')
      "
      :aria-pressed="stickyTool"
      @click="toggleStickyTool"
    >
      <svg class="drawing-toolbar__icon" viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M9 2 L13 6 L11 7 L8.5 7 L7 11 L5 9 L2.5 12.5 L2 13 L2.5 11.5 L5 9 L4 6 L9 2 Z"
          :fill="stickyTool ? 'currentColor' : 'none'"
          stroke="currentColor"
          stroke-width="1.2"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.drawing-toolbar {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px 8px;
  background: var(--vp-c-bg-soft);
  border-right: 1px solid var(--vp-c-divider);
  user-select: none;
  width: 44px;
}

.drawing-toolbar__btn {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: background-color 0.12s, border-color 0.12s, color 0.12s;
}

.drawing-toolbar__btn:hover {
  background: rgba(127, 127, 127, 0.2);
  color: var(--vp-c-text-1);
}
.drawing-toolbar__btn:focus,
.drawing-toolbar__expand:focus {
  outline: none;
}

.drawing-toolbar__btn.drawing-toolbar__btn--active {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
}

.drawing-toolbar__icon {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Arrow is absolute so it never affects the button's layout.
   Positioned in the right-padding zone (8px) of the toolbar —
   left: 100% of cat-wrap = right edge of button = start of right padding.
   visibility:hidden keeps it out of the event stream when not shown. */
.drawing-toolbar__cat-wrap {
  position: relative;
}

.drawing-toolbar__expand {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
  font-size: 9px;
  line-height: 1;
  color: var(--vp-c-text-3);
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.15s, color 0.15s;
}
.drawing-toolbar__cat-wrap:hover .drawing-toolbar__expand,
.drawing-toolbar__expand:hover {
  opacity: 1;
  color: var(--vp-c-text-1);
}

.drawing-toolbar__sep {
  height: 1px;
  margin: 4px 4px;
  background: var(--vp-c-divider, #313244);
}

.cat-flyout {
  position: absolute;
  top: 0;
  left: calc(100% + 6px);
  min-width: 240px;
  /* Hard ceiling for tall menus on short viewports — once the JS shift in
     adjustFlyoutPosition runs out of room, the menu scrolls instead of
     clipping. */
  max-height: calc(100vh - 16px);
  overflow-y: auto;
  padding: 6px;
  background: var(--vp-c-bg-soft, #1e1e2e);
  border: 1px solid var(--vp-c-divider, #313244);
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.cat-flyout__section-title {
  padding: 6px 10px 4px;
  color: var(--vp-c-text-3, #6c7086);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.cat-flyout__item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 6px 10px;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: var(--vp-c-text-1, #cdd6f4);
  font: inherit;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}
.cat-flyout__item:hover {
  background: rgba(127, 127, 127, 0.12);
}
.cat-flyout__item.cat-flyout__item--active {
  background: var(--vp-c-brand-soft, rgba(137, 180, 250, 0.16));
  color: var(--vp-c-brand-1, #89b4fa);
}
.cat-flyout__item--toggle {
  justify-content: space-between;
}
.cat-flyout__sep {
  height: 1px;
  margin: 4px 2px;
  background: var(--vp-c-divider, #313244);
}
.cat-flyout__switch {
  display: inline-block;
  position: relative;
  width: 28px;
  height: 16px;
  background: rgba(127, 127, 127, 0.3);
  border-radius: 8px;
}
.cat-flyout__switch-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  background: var(--vp-c-text-2, #a6adc8);
  border-radius: 50%;
  transition: left 0.15s ease, background 0.15s ease;
}
.cat-flyout__switch--on {
  background: var(--vp-c-brand-soft, rgba(137, 180, 250, 0.5));
}
.cat-flyout__switch--on .cat-flyout__switch-knob {
  left: 14px;
  background: var(--vp-c-brand-1, #89b4fa);
}
</style>
