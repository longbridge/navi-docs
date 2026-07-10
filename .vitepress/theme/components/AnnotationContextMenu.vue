<script setup lang="ts">
/**
 * Right-click context menu for chart annotations.
 *
 * The chart (Rust) decides *which* items appear via the
 * `ContextMenuRequested` event; this component only renders them. Labels are
 * resolved via vue-i18n on each item's `actionId` so the menu is fully
 * localized without the chart needing to know any language.
 *
 * Positioning: the menu uses Radix's `DropdownMenu` controlled-open mode,
 * with a 0×0 invisible trigger absolutely positioned at `(x, y)` so the
 * popup anchors precisely to the click site.
 *
 * Uses the project's wrapped UI components (under `./ui/`) so the visual
 * treatment (background, border, shadow, hover, disabled states) matches
 * the rest of the playground out of the box.
 */

import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import DropdownMenu from './ui/DropdownMenu.vue'
import DropdownMenuContent from './ui/DropdownMenuContent.vue'
import DropdownMenuItem from './ui/DropdownMenuItem.vue'
import DropdownMenuSeparator from './ui/DropdownMenuSeparator.vue'
import { DropdownMenuTrigger } from 'radix-vue'

export interface ContextMenuActionItem {
  type: 'action'
  actionId: string
  enabled: boolean
}
export interface ContextMenuSeparatorItem {
  type: 'separator'
}
export type ContextMenuItem = ContextMenuActionItem | ContextMenuSeparatorItem

interface Props {
  open: boolean
  x: number
  y: number
  items: ContextMenuItem[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'select', actionId: string): void
  (e: 'update:open', value: boolean): void
}>()

const { t, te } = useI18n()

/**
 * Map an `action_id` from Rust to its localized label. Falls back to the
 * raw id (so a stale front-end doesn't crash if the chart later emits an
 * unknown action).
 */
function labelFor(actionId: string | undefined | null): string {
  if (!actionId) return ''
  // snake_case → camelCase for the i18n key
  const key = actionId.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase())
  const path = `playground.contextMenu.${key}`
  return te(path) ? t(path) : actionId
}

const localOpen = computed({
  get: () => props.open,
  set: (v) => emit('update:open', v),
})

watch(
  () => props.open,
  (v) => {
    if (!v) return
    if (!props.items.length) emit('update:open', false)
  },
)

function onItemClick(actionId: string) {
  emit('select', actionId)
  emit('update:open', false)
}
</script>

<template>
  <DropdownMenu v-model:open="localOpen">
    <!-- Invisible 0×0 trigger anchored to the click site. `as-child` makes
         Radix forward Trigger semantics to the inner element, so we don't
         get a default <button>. -->
    <DropdownMenuTrigger as-child>
      <span
        :style="{
          position: 'fixed',
          left: `${x}px`,
          top: `${y}px`,
          width: '0',
          height: '0',
          pointerEvents: 'none',
        }"
        aria-hidden="true"
      />
    </DropdownMenuTrigger>

    <DropdownMenuContent :side-offset="2" align="start" class="min-w-[160px]">
      <template v-for="(item, idx) in items" :key="idx">
        <DropdownMenuSeparator v-if="item.type === 'separator'" />
        <DropdownMenuItem
          v-else
          :disabled="!item.enabled"
          @select="onItemClick(item.actionId)"
        >
          {{ labelFor(item.actionId) }}
        </DropdownMenuItem>
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
