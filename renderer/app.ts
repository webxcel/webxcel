import {
  createSSRApp,
  defineComponent,
  h,
  markRaw,
  reactive,
  inject,
} from "vue";
import PageShell from "./PageShell.vue";
import type { Component, PageContext } from "./types";
import defaultPage from "../layouts/default.vue";
import { setPageContext } from "./usePageContext";
import "vue2-animate/dist/vue2-animate.min.css";
import { hydrate, useQueryClient } from "vue-query";
import { useAppStore } from "../store/app";
import { storeToRefs } from "pinia";

export { createApp };

function createApp(pageContext: PageContext, layout = defaultPage) {
  const { Page } = pageContext;
  const pageLayout = Page?.layout;

  const allLayouts = import.meta.globEager("../layouts/*.vue");
  const aa = Object.keys(allLayouts).map((x) => {
    let g = x.trim().replaceAll(".vue", "").split("/");
    x = g[g.length - 1];
    return x;
  });

  const doesLayoutExists = aa.includes(pageLayout);
  let rootComponent: Component;
  const PageWithWrapper = defineComponent({
    data: () => ({
      Page: markRaw(Page),
      pageProps: markRaw(pageContext.pageProps || {}),
      layout: markRaw(
        doesLayoutExists == true
          ? allLayouts[
              Object.keys(allLayouts).filter((x) => x.includes(pageLayout))[0]
            ].default
          : layout
      ),
    }),
    created() {
      rootComponent = this;
    },
    render() {
      return h(
        this.layout,
        {},
        {
          default: () => {
            return h(this.Page, this.pageProps);
          },
        }
      );
    },
  });

  const app = createSSRApp(PageWithWrapper);

  // We use `app.changePage()` to do Client Routing, see `_default.page.client.js`
  objectAssign(app, {
    changePage: (pageContext: PageContext) => {
      Object.assign(pageContextReactive, pageContext);
      const doesE = aa.includes(pageContext.Page?.layout);
      new Promise<void>((resolve, reject) => {
        rootComponent.layout = markRaw(
          doesE == true
            ? allLayouts[
                Object.keys(allLayouts).filter((x) =>
                  x.includes(pageContext.Page?.layout)
                )[0]
              ].default
            : layout
        );
        resolve();
      }).then(() => {
        rootComponent.Page = markRaw(pageContext.Page);
        rootComponent.pageProps = markRaw(pageContext.pageProps || {});
      });
    },
  });

  // When doing Client Routing, we mutate pageContext (see usage of `app.changePage()` in `_default.page.client.js`).
  // We therefore use a reactive pageContext.
  const pageContextReactive = reactive(pageContext);
  app.config.globalProperties.$pageContext = pageContextReactive;
  Object.values(import.meta.globEager("../plugins/*.ts")).map((i) => {
    i.install?.({ app, context: pageContextReactive });
  });

  // Make `pageContext` accessible from any Vue component
  setPageContext(app, pageContextReactive);

  return app;
}

// Same as `Object.assign()` but with type inference
function objectAssign<Obj, ObjAddendum>(
  obj: Obj,
  objAddendum: ObjAddendum
): asserts obj is Obj & ObjAddendum {
  Object.assign(obj, objAddendum);
}
