<script setup lang="ts">
import { Check, Copy, MessageCircle, Sparkles } from "lucide-vue-next";
import { useData, useRoute } from "vitepress";
import { computed, onMounted, ref } from "vue";

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
const route = useRoute();
const origin = ref("https://navi-lang.org");
const copied = ref(false);
const copyFailed = ref(false);

onMounted(() => {
  origin.value = window.location.origin;
});

const relativePath = computed(() => page.value.relativePath);
const markdownModuleKey = computed(() => `../../../${relativePath.value}`);
const pageUrl = computed(() => {
  if (!origin.value) return "";
  return new URL(route.path, origin.value).href;
});
const markdownUrl = computed(() => {
  if (!origin.value) return "";
  return new URL(`/${relativePath.value}`, origin.value).href;
});
const chatGptUrl = computed(() => {
  const url = pageUrl.value || markdownUrl.value;
  const prompt = `Read from ${url} so I can ask questions about it.`;
  return `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`;
});
const claudeUrl = computed(() => {
  const url = markdownUrl.value || pageUrl.value;
  const prompt = `Read from ${url} so I can ask questions about it.`;
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
</script>

<template>
  <div class="doc-actions" aria-label="AI page actions">
    <button class="doc-action" type="button" @click="copyPage">
      <span class="doc-action-icon">
        <Check v-if="copied" :size="17" />
        <Copy v-else :size="17" />
      </span>
      <span class="doc-action-text">
        <span class="doc-action-title">{{ copied ? "Copied" : "Copy page" }}</span>
        <span class="doc-action-subtitle">{{ copyFailed ? "Copy failed" : "Copy Markdown" }}</span>
      </span>
    </button>

    <a class="doc-action" :href="chatGptUrl" target="_blank" rel="noreferrer">
      <span class="doc-action-icon">
        <MessageCircle :size="17" />
      </span>
      <span class="doc-action-text">
        <span class="doc-action-title">Open in ChatGPT</span>
        <span class="doc-action-subtitle">Ask questions</span>
      </span>
    </a>

    <a class="doc-action" :href="claudeUrl" target="_blank" rel="noreferrer">
      <span class="doc-action-icon">
        <Sparkles :size="17" />
      </span>
      <span class="doc-action-text">
        <span class="doc-action-title">Open in Claude</span>
        <span class="doc-action-subtitle">Ask questions</span>
      </span>
    </a>
  </div>
</template>

<style scoped>
.doc-actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  margin: 18px 0 32px;
  padding: 8px;
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  background: var(--vp-c-bg-elv);
}

.doc-action {
  display: flex;
  min-width: 0;
  min-height: 52px;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-1);
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease;
}

.doc-action:hover {
  border-color: var(--vp-c-border);
  background: rgba(0, 0, 0, 0.04);
  color: var(--vp-c-brand-1);
}

html.dark .doc-action:hover {
  background: rgba(255, 255, 255, 0.06);
}

.doc-action-icon {
  display: inline-flex;
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.doc-action:hover .doc-action-icon {
  color: var(--vp-c-brand-1);
}

.doc-action-text {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 2px;
}

.doc-action-title,
.doc-action-subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.doc-action-title {
  color: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}

.doc-action-subtitle {
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

@media (max-width: 767px) {
  .doc-actions {
    grid-template-columns: 1fr;
  }
}
</style>
