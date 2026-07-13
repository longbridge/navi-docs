<script setup lang="ts">
import { CheckboxRoot, CheckboxIndicator, type CheckboxRootProps } from 'radix-vue'
import { Check } from 'lucide-vue-next'
import { cn } from '../../lib/utils'

const props = defineProps<CheckboxRootProps & { class?: string }>()
const emit = defineEmits<{
  'update:checked': [value: boolean]
}>()
</script>

<template>
  <CheckboxRoot
    v-bind="{ ...props, class: undefined }"
    :class="cn(
      'peer h-4 w-4 shrink-0 rounded-sm border-2 border-foreground bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      props.class,
    )"
    @update:checked="emit('update:checked', $event as boolean)"
  >
    <CheckboxIndicator class="flex items-center justify-center text-current">
      <Check class="h-3.5 w-3.5" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
