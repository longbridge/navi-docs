<script setup lang="ts">
/**
 * Curated emoji picker shown when the Emoji drawing tool is active.
 *
 * Renders a small popover anchored to the toolbar. Clicking a glyph
 * sets `playground.set_default_emoji_glyph(glyph)` so the next placed
 * Emoji annotation uses it. The popover stays open across placements
 * so the user can rapid-fire markers; closing it (Esc / click-outside
 * / re-toggling the toolbar button) leaves the most recent selection
 * as the active glyph.
 *
 * The list is intentionally curated for trading use cases (faces /
 * sentiment / market / arrows) rather than exhaustive — keeps the
 * popover compact and avoids pulling in a 300 KB emoji-data bundle.
 */

import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

interface Props {
  open: boolean
  selected: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
  (e: 'select', glyph: string): void
}>()

interface Category {
  title: string
  emojis: string[]
}

const categories: Category[] = [
  {
    title: 'Sentiment',
    emojis: ['👍', '👎', '✅', '❌', '⚠️', '🔥', '💯', '⭐', '🌟', '✨', '💡', '🎯'],
  },
  {
    title: 'Market',
    emojis: ['📈', '📉', '📊', '💰', '💵', '💸', '💎', '🚀', '🐂', '🐻', '💹', '🪙'],
  },
  {
    title: 'Faces',
    emojis: [
      '😀',
      '😃',
      '😄',
      '😁',
      '😆',
      '😂',
      '🤣',
      '🙂',
      '😉',
      '😊',
      '😍',
      '🤔',
      '🤨',
      '🧐',
      '😎',
      '🤓',
      '🥳',
      '😱',
      '😨',
      '😢',
      '😭',
      '😡',
      '🤯',
      '😴',
    ],
  },
  {
    title: 'Arrows & Symbols',
    emojis: ['⬆️', '⬇️', '⬅️', '➡️', '↗️', '↘️', '↙️', '↖️', '🔼', '🔽', '◀️', '▶️', '⏰', '⏳', '🔔', '🚩'],
  },
  {
    title: 'Hands',
    emojis: ['✋', '👋', '🤚', '🖐️', '✌️', '🤞', '🤟', '🤘', '👌', '🤏', '👈', '👉', '👆', '👇', '🙏', '👏'],
  },
]

const popover = ref<HTMLDivElement | null>(null)

function close() {
  emit('update:open', false)
}

function pick(glyph: string) {
  emit('select', glyph)
}

function onDocumentMouseDown(ev: MouseEvent) {
  if (!props.open || !popover.value) return
  if (popover.value.contains(ev.target as Node)) return
  close()
}

function onKeyDown(ev: KeyboardEvent) {
  if (props.open && ev.key === 'Escape') {
    close()
  }
}

onMounted(() => {
  document.addEventListener('mousedown', onDocumentMouseDown, true)
  document.addEventListener('keydown', onKeyDown)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocumentMouseDown, true)
  document.removeEventListener('keydown', onKeyDown)
})

watch(
  () => props.open,
  async (open) => {
    if (open) {
      await nextTick()
      popover.value?.focus()
    }
  },
)
</script>

<template>
  <div
    v-if="open"
    ref="popover"
    class="emoji-picker"
    role="dialog"
    aria-label="Emoji picker"
    tabindex="-1"
  >
    <div v-for="cat in categories" :key="cat.title" class="emoji-category">
      <div class="emoji-category__title">{{ cat.title }}</div>
      <div class="emoji-category__grid">
        <button
          v-for="g in cat.emojis"
          :key="g"
          type="button"
          class="emoji-cell"
          :class="{ 'emoji-cell--selected': g === selected }"
          :title="g"
          @click="pick(g)"
        >
          {{ g }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.emoji-picker {
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 8px;
  z-index: 50;
  width: 280px;
  max-height: 360px;
  overflow-y: auto;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.12),
    0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 10px 8px;
  outline: none;
}

.emoji-category + .emoji-category {
  margin-top: 10px;
}

.emoji-category__title {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-2);
  margin-bottom: 4px;
  padding: 0 2px;
}

.emoji-category__grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 2px;
}

.emoji-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 18px;
  line-height: 1;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
  transition:
    background 80ms,
    border-color 80ms;
}

.emoji-cell:hover {
  background: var(--vp-c-bg-soft);
}

.emoji-cell--selected {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}
</style>
