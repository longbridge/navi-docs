import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import type { DefaultTheme } from "vitepress";

const SIDEBAR_LABELS = {
  en: {
    types: "Types",
    functions: "Functions",
    properties: "Properties",
    modules: "Modules",
  },
  "zh-CN": {
    types: "类型",
    functions: "函数",
    properties: "属性",
    modules: "模块",
  },
  "zh-HK": {
    types: "類型",
    functions: "函數",
    properties: "屬性",
    modules: "模組",
  },
} as const;

interface SidebarLocale {
  prelude: {
    types: { name: string; genericParams: string[] }[];
    functions: string[];
    properties: string[];
  };
  modules: string[];
}

function loadSidebarData(): Record<string, SidebarLocale> | null {
  const jsonPath = resolve(__dirname, "..", "..", "stdlib-sidebar.json");
  if (!existsSync(jsonPath)) {
    console.warn("[config] stdlib-sidebar.json not found, stdlib sidebar will be empty");
    return null;
  }
  return JSON.parse(readFileSync(jsonPath, "utf-8"));
}

const sidebarData = loadSidebarData();

function buildSidebar(prefix: string, locale: string): DefaultTheme.SidebarItem[] {
  if (!sidebarData) return [];
  const data: SidebarLocale = sidebarData[locale] ?? sidebarData["en"];
  if (!data) return [];

  const labels = SIDEBAR_LABELS[locale as keyof typeof SIDEBAR_LABELS] ?? SIDEBAR_LABELS.en;
  const preludePath = `${prefix}/api/stdlib/prelude/`;
  const items: DefaultTheme.SidebarItem[] = [];

  const { prelude, modules } = data;

  // Collision detection for anchor disambiguation
  const nameCounts = new Map<string, number>();
  for (const n of [...prelude.properties, ...prelude.functions])
    nameCounts.set(n, (nameCounts.get(n) || 0) + 1);
  const anchor = (name: string, kindPrefix: string) =>
    (nameCounts.get(name) || 0) > 1 ? `${kindPrefix}-${name}` : name;

  if (prelude.types.length > 0) {
    items.push({
      text: labels.types,
      collapsed: true,
      items: prelude.types.map(({ name, genericParams }) => ({
        text: genericParams.length ? `${name}<${genericParams.join(", ")}>` : name,
        link: `${preludePath}${name}`,
      })),
    });
  }

  if (prelude.functions.length > 0) {
    items.push({
      text: labels.functions,
      collapsed: true,
      items: prelude.functions.map((name) => ({
        text: name,
        link: `${preludePath}#${anchor(name, "fn")}`,
      })),
    });
  }

  if (prelude.properties.length > 0) {
    items.push({
      text: labels.properties,
      collapsed: true,
      items: prelude.properties.map((name) => ({
        text: name,
        link: `${preludePath}#${anchor(name, "prop")}`,
      })),
    });
  }

  const top = modules.filter((n) => !n.includes(".")).map((n) => ({
    text: n,
    link: `${prefix}/api/stdlib/${n}/`,
  }));
  const sub = modules.filter((n) => n.includes(".")).map((n) => ({
    text: n,
    link: `${prefix}/api/stdlib/${n.replace(/\./g, "_")}/`,
  }));

  const moduleItems = [...top, ...sub];
  if (moduleItems.length > 0) {
    items.push({
      text: labels.modules,
      collapsed: false,
      items: moduleItems,
    });
  }

  return items;
}

export function apiSidebar(prefix: string = "", locale: string = "en"): DefaultTheme.SidebarItem[] {
  return buildSidebar(prefix, locale);
}
