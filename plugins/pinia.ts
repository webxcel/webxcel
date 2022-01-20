import { createPinia } from "pinia";
import devalue from "@nuxt/devalue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// Setup Pinia
// https://pinia.esm.dev/
export const install = ({ app, context }: { app: any; context: any }) => {
  const pinia = createPinia();
  app.use(pinia);

  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (!import.meta.env.SSR) {
    pinia.state.value = JSON.parse(context.initialState.pinia || {});
    pinia.use(piniaPluginPersistedstate);
  } else {
    context.initialState.pinia = devalue(pinia.state.value);
  }
};
