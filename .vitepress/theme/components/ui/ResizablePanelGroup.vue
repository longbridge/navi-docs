<script setup lang="ts">
import { SplitterGroup, type SplitterGroupProps } from 'radix-vue'
import { cn } from '../../lib/utils'

const props = defineProps<SplitterGroupProps & { class?: string }>()
</script>

<template>
  <SplitterGroup
    v-bind="{ ...props, class: undefined }"
    :class="cn(
      'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
      props.class,
    )"
  >
    <slot />
  </SplitterGroup>
</template>
