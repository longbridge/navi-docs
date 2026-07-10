<script setup lang="ts">
import {
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  FileText,
  MessageCircle,
  Sparkles,
} from "lucide-vue-next";
import { useData } from "vitepress";
import { computed, onMounted, ref } from "vue";
import { DropdownMenuTrigger } from "radix-vue";
import DropdownMenu from "./ui/DropdownMenu.vue";
import DropdownMenuContent from "./ui/DropdownMenuContent.vue";
import DropdownMenuItem from "./ui/DropdownMenuItem.vue";
import DropdownMenuSeparator from "./ui/DropdownMenuSeparator.vue";

const markdownModules = import.meta.glob(
  [
    "../../../*.md",
    "../../../guide/**/*.md",
    "../../../api/**/*.md",
    "../../../zh-CN/**/*.md",
    "../../../zh-HK/**/*.md",
  ],
  { query: "?raw", import: "default" },
) as Record<string, () => Promise<string>>;

const { page } = useData();
const origin = ref("https://navi-lang.org");
const copied = ref(false);
const copyFailed = ref(false);

onMounted(() => {
  origin.value = window.location.origin;
});

const relativePath = computed(() => page.value.relativePath);
const markdownModuleKey = computed(() => `../../../${relativePath.value}`);
const markdownUrl = computed(() => {
  if (!origin.value) return "";
  return new URL(`/${relativePath.value}`, origin.value).href;
});
const chatGptUrl = computed(() => {
  const prompt = `Read from ${markdownUrl.value} so I can ask questions about it.`;
  return `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`;
});
const claudeUrl = computed(() => {
  const prompt = `Read from ${markdownUrl.value} so I can ask questions about it.`;
  return `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
});

function cleanMarkdown(raw: string): string {
  return raw
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "")
    .replace(/<script setup[\s\S]*?<\/script>\s*/g, "")
    .trim()
    .concat("\n");
}

async function loadMarkdown(): Promise<string> {
  const load = markdownModules[markdownModuleKey.value];
  if (load) return cleanMarkdown(await load());

  const response = await fetch(markdownUrl.value);
  if (!response.ok) {
    throw new Error(`Failed to load ${markdownUrl.value}`);
  }
  return cleanMarkdown(await response.text());
}

async function copyPage() {
  copyFailed.value = false;
  try {
    await navigator.clipboard.writeText(await loadMarkdown());
    copied.value = true;
    window.setTimeout(() => {
      copied.value = false;
    }, 1800);
  } catch {
    copyFailed.value = true;
  }
}

function openUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}
</script>

<template>
  <div class="doc-actions">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <button class="doc-action-trigger" type="button" aria-label="Open page actions">
          <span class="doc-action-trigger-icon">
            <Check v-if="copied" :size="16" />
            <Copy v-else :size="16" />
          </span>
          <span>{{ copied ? "Copied" : copyFailed ? "Copy failed" : "Copy page" }}</span>
          <ChevronDown class="doc-action-chevron" :size="16" aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" :side-offset="8" class="doc-action-menu">
        <DropdownMenuItem class="doc-action-menu-item" @select="copyPage">
          <span class="doc-action-menu-icon">
            <Check v-if="copied" :size="17" />
            <Copy v-else :size="17" />
          </span>
          <span class="doc-action-menu-text">
            <span class="doc-action-menu-title">{{ copied ? "Copied" : "Copy page" }}</span>
            <span class="doc-action-menu-subtitle">{{ copyFailed ? "Copy failed" : "Copy Markdown" }}</span>
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem class="doc-action-menu-item" @select="openUrl(markdownUrl)">
          <span class="doc-action-menu-icon">
            <FileText :size="17" />
          </span>
          <span class="doc-action-menu-text">
            <span class="doc-action-menu-title">Open Markdown</span>
            <span class="doc-action-menu-subtitle">Open .md file</span>
          </span>
          <ExternalLink class="doc-action-menu-external" :size="14" aria-hidden="true" />
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem class="doc-action-menu-item" @select="openUrl(chatGptUrl)">
          <span class="doc-action-menu-icon">
            <MessageCircle :size="17" />
          </span>
          <span class="doc-action-menu-text">
            <span class="doc-action-menu-title">Open in ChatGPT</span>
            <span class="doc-action-menu-subtitle">Ask questions about .md</span>
          </span>
          <ExternalLink class="doc-action-menu-external" :size="14" aria-hidden="true" />
        </DropdownMenuItem>

        <DropdownMenuItem class="doc-action-menu-item" @select="openUrl(claudeUrl)">
          <span class="doc-action-menu-icon">
            <Sparkles :size="17" />
          </span>
          <span class="doc-action-menu-text">
            <span class="doc-action-menu-title">Open in Claude</span>
            <span class="doc-action-menu-subtitle">Ask questions about .md</span>
          </span>
          <ExternalLink class="doc-action-menu-external" :size="14" aria-hidden="true" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<style scoped>
.doc-actions {
  display: flex;
  justify-content: flex-end;
  margin: -2px 0 28px;
}

.doc-action-trigger {
  display: inline-flex;
  height: 40px;
  align-items: center;
  gap: 10px;
  padding: 0 14px 0 10px;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  box-shadow: var(--lb-shadow-1);
  transition: border-color 0.18s ease, color 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease;
}

.doc-action-trigger:hover,
.doc-action-trigger[data-state="open"] {
  border-color: rgba(0, 173, 162, 0.35);
  background: rgba(0, 0, 0, 0.04);
  color: var(--vp-c-brand-1);
}

html.dark .doc-action-trigger:hover,
html.dark .doc-action-trigger[data-state="open"] {
  border-color: rgba(0, 240, 196, 0.35);
  background: rgba(255, 255, 255, 0.06);
}

.doc-action-trigger-icon {
  display: inline-flex;
  width: 28px;
  height: 28px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.doc-action-chevron {
  color: var(--vp-c-text-3);
  transition: transform 0.18s ease;
}

.doc-action-trigger[data-state="open"] .doc-action-chevron {
  transform: rotate(180deg);
}

.doc-action-menu {
  width: 272px;
  padding: 6px;
  border-color: var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg-elv);
  box-shadow: var(--lb-shadow-2);
}

.doc-action-menu-item {
  min-height: 50px;
  gap: 12px;
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--vp-c-text-1);
  cursor: pointer;
  line-height: 1;
}

.doc-action-menu-item[data-highlighted] {
  background: rgba(0, 0, 0, 0.04);
  color: var(--vp-c-brand-1);
}

html.dark .doc-action-menu-item[data-highlighted] {
  background: rgba(255, 255, 255, 0.06);
}

.doc-action-menu-icon {
  display: inline-flex;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.doc-action-menu-item[data-highlighted] .doc-action-menu-icon {
  color: var(--vp-c-brand-1);
}

.doc-action-menu-text {
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 4px;
}

.doc-action-menu-title,
.doc-action-menu-subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.doc-action-menu-title {
  color: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
}

.doc-action-menu-subtitle {
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.doc-action-menu-external {
  flex: 0 0 auto;
  color: var(--vp-c-text-3);
}

@media (max-width: 640px) {
  .doc-actions {
    justify-content: flex-start;
  }

  .doc-action-trigger {
    width: 100%;
    justify-content: center;
  }
}
</style>
