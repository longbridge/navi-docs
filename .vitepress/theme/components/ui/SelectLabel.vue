<script setup lang="ts">
import { SelectLabel, type SelectLabelProps } from 'radix-vue'
import { cn } from '../../lib/utils'

const props = defineProps<SelectLabelProps & { class?: string }>()
</script>

<template>
  <SelectLabel
    v-bind="{ ...props, class: undefined }"
    :class="cn('px-2 py-1.5 text-sm font-semibold', props.class)"
  >
    <slot />
  </SelectLabel>
</template>
