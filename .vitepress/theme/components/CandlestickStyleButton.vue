<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { PopoverRoot, PopoverTrigger, PopoverContent, PopoverPortal } from 'radix-vue'
import {
  CANDLESTICK_STYLES,
  CANDLESTICK_STYLE_GROUPS,
  CANDLESTICK_STYLE_MAP,
  type CandlestickStyleKey,
} from '../constants/candlestick-styles'

const { t } = useI18n()

const props = defineProps<{
  activeStyle: CandlestickStyleKey
  /** Show label text next to the icon in the trigger button. */
  showLabel?: boolean
}>()

const emit = defineEmits<{
  select: [key: CandlestickStyleKey]
}>()

const open = ref(false)

function select(key: CandlestickStyleKey) {
  emit('select', key)
  open.value = false
}
</script>

<template>
  <PopoverRoot v-model:open="open">
    <PopoverTrigger as-child>
      <button
        :title="t(`candlestickStyle.styles.${activeStyle}`, CANDLESTICK_STYLE_MAP[activeStyle]?.label ?? activeStyle)"
        class="inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
        :class="[
          open ? 'bg-primary/10 text-primary' : '',
          showLabel ? 'px-2' : 'w-7 justify-center',
        ]"
      >
        <svg
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="shrink-0"
          v-html="CANDLESTICK_STYLE_MAP[activeStyle]?.icon ?? ''"
        />
        <span v-if="showLabel" class="text-xs font-medium">
          {{ t(`candlestickStyle.styles.${activeStyle}`, CANDLESTICK_STYLE_MAP[activeStyle]?.label ?? activeStyle) }}
        </span>
      </button>
    </PopoverTrigger>

    <PopoverPortal>
      <PopoverContent
        side="bottom"
        align="start"
        :side-offset="4"
        class="z-50 min-w-[180px] rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none"
      >
        <template v-for="group in CANDLESTICK_STYLE_GROUPS" :key="group">
          <!-- Group label -->
          <p class="px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            {{ t(`candlestickStyle.groups.${group}`, group) }}
          </p>
          <!-- Style items -->
          <button
            v-for="style in CANDLESTICK_STYLES.filter(s => s.group === group)"
            :key="style.key"
            class="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-foreground/10 hover:text-foreground"
            :class="style.key === activeStyle ? 'bg-primary/10 font-medium text-primary' : ''"
            @click="select(style.key)"
          >
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="shrink-0"
              v-html="style.icon"
            />
            <span>{{ t(`candlestickStyle.styles.${style.key}`, style.label) }}</span>
          </button>
        </template>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
