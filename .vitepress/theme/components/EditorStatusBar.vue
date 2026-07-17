<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { CircleX, TriangleAlert, CircleCheck } from 'lucide-vue-next'

const { t } = useI18n()

const props = defineProps<{
  firstDiagnostic: { severity: string; message: string; line: number; column: number; filePath?: string } | null
}>()

const emit = defineEmits<{
  goto: []
}>()

const statusIcon = computed(() => {
  if (props.firstDiagnostic?.severity === 'error') return 'error'
  if (props.firstDiagnostic?.severity === 'warning') return 'warning'
  return null
})

/** True when the diagnostic originates from an imported/external module. */
const isExternalFile = computed(() => {
  const fp = props.firstDiagnostic?.filePath
  return !!fp && fp !== 'playground.nv'
})
</script>

<template>
  <div class="flex min-w-0 shrink-0 items-start gap-2 border-t border-border bg-muted/40 px-3 py-1.5 font-mono text-xs">
    <!-- Diagnostic message -->
    <button
      v-if="firstDiagnostic"
      class="flex items-start gap-2 min-w-0 transition-opacity"
      :class="isExternalFile ? 'cursor-default' : 'cursor-pointer hover:opacity-80'"
      @click="emit('goto')"
    >
      <CircleX v-if="statusIcon === 'error'" :size="14" class="shrink-0 mt-px text-destructive" />
      <TriangleAlert v-else-if="statusIcon === 'warning'" :size="14" class="shrink-0 mt-px text-yellow-500" />
      <span v-if="isExternalFile" class="shrink-0 rounded px-1 py-px text-[10px] leading-tight bg-muted text-muted-foreground">{{ firstDiagnostic.filePath }}</span>
      <span class="min-w-0 break-words text-left" :class="statusIcon === 'error' ? 'text-destructive' : 'text-yellow-500'">
        <template v-if="!isExternalFile">Ln {{ firstDiagnostic.line }}: </template>
        {{ firstDiagnostic.message }}
      </span>
    </button>
    <template v-else>
      <CircleCheck :size="14" class="shrink-0 text-primary" />
      <span class="text-muted-foreground">{{ t('status.noIssues') }}</span>
    </template>
  </div>
</template>
