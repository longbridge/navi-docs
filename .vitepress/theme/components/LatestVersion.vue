<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useData } from "vitepress";

const { lang } = useData();
const label = computed(() =>
  lang.value.startsWith("zh") ? "最新版本" : "Latest version",
);

const version = ref("");

onMounted(async () => {
  try {
    const response = await fetch(
      "https://assets.lbkrs.com/github/release/navi/stable/latest.json",
    );
    if (!response.ok) return;

    const release = (await response.json()) as {
      version?: string;
    };
    if (!release.version) return;

    version.value = release.version.startsWith("v")
      ? release.version
      : `v${release.version}`;
  } catch {
    // The version badge is optional; keep the homepage usable when offline.
  }
});
</script>

<template>
  <div v-if="version" class="latest-version">
    <span>{{ label }}</span>
    <strong>{{ version }}</strong>
  </div>
</template>

<style scoped>
.latest-version {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  padding: 7px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1;
}

.latest-version strong {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
</style>
