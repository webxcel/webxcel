import { createApp } from "./app";
import { getPageTitle } from "./getPageTitle";
import { navigate, useClientRouter } from "vite-plugin-ssr/client/router";
import type { PageContext } from "./types";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client/router";
import "./styles/index.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { createPinia } from "pinia";
import { useAppStore } from "#/store/app";

let app: ReturnType<typeof createApp>;
const { hydrationPromise } = useClientRouter({
  render(pageContext: PageContextBuiltInClient & PageContext) {
    if (!app) {
      app = createApp(pageContext);
      app.mount("#app");
      console.log("app");
    } else {
      console.log("app2");
      const pinia = createPinia();
      const store = useAppStore();
      const allowed = ["/signup", "/github"];
      //@ts-ignore
      const { redirectTo, urlPathname } = pageContext;
      const token =
        store.github.token || store.gitlab.token || store.bitbucket.token;
      console.log("client", token);
      if (!token) {
        if (!allowed.includes(urlPathname)) {
          return navigate("/signup");
        }
      }
      if (redirectTo) {
        navigate(redirectTo);
        return;
      }
      app.changePage(pageContext);
    }
    document.title = getPageTitle(pageContext);
  },
  // Vue needs the first render to be a hydration
  ensureHydration: true,
  prefetchLinks: true,
  onTransitionStart,
  onTransitionEnd,
});

hydrationPromise.then(() => {
  console.log("Hydration finished; page is now interactive.");
});

function onTransitionStart() {
  // console.log("Page transition start");
  // document.querySelector(".content")?.classList.add("page-transition");
  NProgress.start();
}
function onTransitionEnd() {
  // console.log("Page transition end");
  // document.querySelector(".content")?.classList.remove("page-transition");
  NProgress.done();
}
