<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { DialogRoot } from 'radix-vue'
import type { ScriptItem } from '../composables/script-store'
import { isBuiltinId, getBuiltinScript } from '../composables/builtin-scripts'
import DialogContent from './ui/DialogContent.vue'
import DialogHeader from './ui/DialogHeader.vue'
import DialogTitle from './ui/DialogTitle.vue'
import DialogDescription from './ui/DialogDescription.vue'
import DialogFooter from './ui/DialogFooter.vue'
import Button from './ui/Button.vue'
import Input from './ui/Input.vue'

const { t } = useI18n()

interface BacktraceFrame {
  funcName: string | null
  filePath: string
  line: number
  column: number
  endLine: number
  endColumn: number
  moduleKind: string
}

interface CompileLocation {
  message: string
  filePath: string
  line: number
  column: number
  endLine: number
  endColumn: number
}

const props = defineProps<{
  mode: 'none' | 'saveAs' | 'rename' | 'delete' | 'scriptError' | 'runtimeError'
  activeScriptId: string | null
  scripts: ScriptItem[]
  errorMessage?: string
  scriptError?: { message: string; scriptTag: string; locations: CompileLocation[] } | null
  runtimeError?: { message: string; scriptTag: string; backtrace: BacktraceFrame[] } | null
}>()

const emit = defineEmits<{
  close: []
  'save-as': [name: string]
  rename: [name: string]
  delete: []
  /** Navigate to a span in the editor and switch to the given script tag (1-based positions). */
  goto: [line: number, column: number, endLine: number, endColumn: number, scriptTag: string]
}>()

const inputValue = ref('')

const open = computed(() => props.mode !== 'none')
const scriptErrorLocations = computed(() => props.scriptError?.locations ?? [])
function isMainScriptPath(filePath: string) {
  return !filePath || filePath === 'playground.nv' || filePath === '<main>'
}
const groupedScriptErrors = computed(() => {
  const groups = new Map<string, CompileLocation[]>()
  for (const location of scriptErrorLocations.value) {
    const key = location.message.trim() || props.scriptError?.message || props.errorMessage || ''
    const existing = groups.get(key)
    if (existing) {
      existing.push(location)
    } else {
      groups.set(key, [location])
    }
  }
  return Array.from(groups.entries()).map(([message, locations]) => ({ message, locations }))
})

watch(() => props.mode, (mode) => {
  if (mode === 'rename' && props.activeScriptId && !isBuiltinId(props.activeScriptId)) {
    const script = props.scripts.find(s => s.id === props.activeScriptId)
    inputValue.value = script?.name ?? ''
  } else if (mode === 'saveAs') {
    if (props.activeScriptId && isBuiltinId(props.activeScriptId)) {
      const builtin = getBuiltinScript(props.activeScriptId)
      inputValue.value = builtin ? `${builtin.name} (copy)` : ''
    } else {
      const script = props.scripts.find(s => s.id === props.activeScriptId)
      inputValue.value = script ? `${script.name} (copy)` : ''
    }
  }
})

function confirm() {
  const name = inputValue.value.trim()
  if (!name && props.mode !== 'delete') return

  if (props.mode === 'saveAs') {
    emit('save-as', name)
  } else if (props.mode === 'rename') {
    emit('rename', name)
  } else if (props.mode === 'delete') {
    emit('delete')
  }
}

function onOpenChange(value: boolean) {
  if (!value) emit('close')
}


</script>

<template>
  <!-- Save As dialog -->
  <DialogRoot :open="mode === 'saveAs'" @update:open="onOpenChange">
    <DialogContent class="sm:max-w-[400px]">
      <DialogHeader>
        <DialogTitle>{{ t('dialog.saveAs') }}</DialogTitle>
        <DialogDescription>{{ t('dialog.saveAsDesc') }}</DialogDescription>
      </DialogHeader>
      <Input
        v-model="inputValue"
        :placeholder="t('dialog.placeholder')"
        class="mt-2"
        @keydown.enter.prevent="confirm"
      />
      <DialogFooter class="mt-4">
        <Button variant="outline" @click="emit('close')">{{ t('dialog.cancel') }}</Button>
        <Button :disabled="!inputValue.trim()" @click="confirm">{{ t('dialog.save') }}</Button>
      </DialogFooter>
    </DialogContent>
  </DialogRoot>

  <!-- Rename dialog -->
  <DialogRoot :open="mode === 'rename'" @update:open="onOpenChange">
    <DialogContent class="sm:max-w-[400px]">
      <DialogHeader>
        <DialogTitle>{{ t('dialog.rename') }}</DialogTitle>
        <DialogDescription>{{ t('dialog.renameDesc') }}</DialogDescription>
      </DialogHeader>
      <Input
        v-model="inputValue"
        class="mt-2"
        @keydown.enter.prevent="confirm"
      />
      <DialogFooter class="mt-4">
        <Button variant="outline" @click="emit('close')">{{ t('dialog.cancel') }}</Button>
        <Button :disabled="!inputValue.trim()" @click="confirm">{{ t('dialog.renameBtn') }}</Button>
      </DialogFooter>
    </DialogContent>
  </DialogRoot>

  <!-- Delete confirmation dialog -->
  <DialogRoot :open="mode === 'delete'" @update:open="onOpenChange">
    <DialogContent class="sm:max-w-[400px]">
      <DialogHeader>
        <DialogTitle>{{ t('dialog.delete') }}</DialogTitle>
        <DialogDescription>
          {{ t('dialog.deleteDesc') }}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter class="mt-4">
        <Button variant="outline" @click="emit('close')">{{ t('dialog.cancel') }}</Button>
        <Button variant="destructive" @click="confirm">{{ t('dialog.deleteBtn') }}</Button>
      </DialogFooter>
    </DialogContent>
  </DialogRoot>

  <!-- Script error dialog -->
  <DialogRoot :open="mode === 'scriptError'" @update:open="onOpenChange">
    <DialogContent class="sm:max-w-[480px]">
      <DialogHeader>
        <DialogTitle class="text-destructive">{{ t('dialog.scriptError') }}</DialogTitle>
      </DialogHeader>
      <div v-if="groupedScriptErrors.length" class="mt-3">
        <div class="rounded-md border bg-muted/50 overflow-auto max-h-60 p-2 space-y-3">
          <div
            v-for="(group, groupIndex) in groupedScriptErrors"
            :key="`${group.message}-${groupIndex}`"
            class="rounded-md border border-border/60 bg-background/60 px-3 py-2"
          >
            <div class="flex items-start gap-2">
              <span class="mt-0.5 text-[10px] leading-none rounded bg-muted px-1.5 py-1 text-muted-foreground select-none">{{ groupIndex + 1 }}</span>
              <div class="min-w-0 flex-1">
                <div class="text-sm text-foreground break-words">{{ group.message }}</div>
                <div class="mt-2 space-y-1.5">
                  <div
                    v-for="(location, locationIndex) in group.locations"
                    :key="`${group.message}-${location.filePath}-${location.line}-${location.column}-${locationIndex}`"
                    :class="[
                      'rounded px-2 py-1 text-xs',
                      isMainScriptPath(location.filePath)
                        ? 'cursor-pointer hover:bg-primary/5'
                        : 'text-muted-foreground'
                    ]"
                    @click="isMainScriptPath(location.filePath) && (emit('goto', location.line, location.column, location.endLine, location.endColumn, scriptError!.scriptTag), emit('close'))"
                  >
                    <div
                      class="font-mono"
                      :class="isMainScriptPath(location.filePath)
                        ? 'text-primary underline decoration-dotted underline-offset-2'
                        : 'text-foreground/80'"
                    >{{ location.filePath }}:{{ location.line }}:{{ location.column }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogFooter class="mt-4">
        <Button @click="emit('close')">{{ t('dialog.ok') }}</Button>
      </DialogFooter>
    </DialogContent>
  </DialogRoot>

  <!-- Runtime error dialog -->
  <DialogRoot :open="mode === 'runtimeError'" @update:open="onOpenChange">
    <DialogContent class="sm:max-w-[520px]">
      <DialogHeader>
        <DialogTitle class="text-destructive">{{ t('dialog.runtimeError') }}</DialogTitle>
        <DialogDescription>
          {{ runtimeError?.message }}
        </DialogDescription>
      </DialogHeader>
      <div v-if="runtimeError?.backtrace?.length" class="mt-3">
        <div class="text-xs font-medium text-muted-foreground mb-1.5">{{ t('dialog.callStack') }}</div>
        <div class="rounded-md border bg-muted/50 text-xs font-mono overflow-auto max-h-48 p-2 space-y-0.5">
          <div
            v-for="(frame, i) in runtimeError.backtrace"
            :key="i"
            :class="[
              'text-foreground/80 py-0.5',
              frame.moduleKind === 'main' ? 'cursor-pointer hover:text-primary' : ''
            ]"
            @click="frame.moduleKind === 'main' && (emit('goto', frame.line, frame.column, frame.endLine, frame.endColumn, runtimeError!.scriptTag), emit('close'))"
          >
            <span class="text-muted-foreground select-none">#{{ i }}</span>
            <span class="ml-1 font-semibold">{{ frame.funcName ?? '&lt;root&gt;' }}</span>
            <span
              class="ml-1"
              :class="frame.moduleKind === 'main'
                ? 'underline decoration-dotted underline-offset-2'
                : 'text-muted-foreground'"
            >{{ frame.filePath }}:{{ frame.line }}:{{ frame.column }}</span>
          </div>
        </div>
      </div>
      <DialogFooter class="mt-4">
        <Button @click="emit('close')">{{ t('dialog.ok') }}</Button>
      </DialogFooter>
    </DialogContent>
  </DialogRoot>
</template>
