import { renderToNodeStream } from "@vue/server-renderer";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
import { escapeInject } from "vite-plugin-ssr";
import { createApp } from "./app";
import { getPageTitle } from "./getPageTitle";
import type { PageContext } from "./types";

export { passToClient };
export { render };

const initialState = {} as any;
const passToClient = [
  "pageProps",
  "documentProps",
  "routeParams",
  "initialState",
];

async function render(pageContext: PageContextBuiltIn & PageContext) {
  pageContext.initialState = initialState;
  const app = createApp(pageContext);
  const stream = renderToNodeStream(app);
  const url = pageContext.urlPathname;
  const title = getPageTitle(pageContext);
  const desc =
    (pageContext.pageExports.documentProps || {}).description ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).description ||
    "App";
  const theme =
    (pageContext.pageExports.documentProps || {}).theme ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).theme ||
    "wireframe";

  return escapeInject`<!DOCTYPE html>
    <html lang="en" data-theme="${theme}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">      
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${stream}</div>
      </body>
    </html>`;
}
