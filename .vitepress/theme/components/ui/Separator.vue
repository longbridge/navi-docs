<script setup lang="ts">
import { Separator, type SeparatorProps } from 'radix-vue'
import { cn } from '../../lib/utils'

const props = withDefaults(defineProps<SeparatorProps & { class?: string }>(), {
  orientation: 'horizontal',
  decorative: true,
})
</script>

<template>
  <Separator
    v-bind="{ ...props, class: undefined }"
    :class="cn(
      'shrink-0 bg-border',
      props.orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
      props.class,
    )"
  />
</template>
