import { createPinia } from "pinia";
import devalue from "@nuxt/devalue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { useAppStore } from "#/store/app";
// Setup Pinia
// https://pinia.esm.dev/
export const install = ({ app, context }: { app: any; context: any }) => {
  const pinia = createPinia();
  app.use(pinia);
  if (!import.meta.env.SSR) {
    pinia.use(piniaPluginPersistedstate);
  }
};
