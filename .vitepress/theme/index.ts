import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { h } from "vue";
import { createI18n } from "vue-i18n";
import DocActions from "./components/DocActions.vue";
import OverloadTabs from "./components/OverloadTabs.vue";
import "./styles/playground.css";
import "./styles/design.css";
import en from "../i18n/en";
import zhCN from "../i18n/zh-CN";
import zhHK from "../i18n/zh-HK";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    "zh-CN": zhCN,
    "zh-HK": zhHK,
  },
});

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout);
  },
  enhanceApp({ app, router }) {
    app.use(i18n);
    app.component("DocActions", DocActions);
    app.component("OverloadTabs", OverloadTabs);

    if (typeof window !== "undefined") {
      // Sync vue-i18n locale with VitePress lang on route change.
      router.onAfterRouteChanged = () => {
        const lang = document.documentElement.lang || "en";
        i18n.global.locale.value = lang;
      };
    }
  },
} satisfies Theme;
