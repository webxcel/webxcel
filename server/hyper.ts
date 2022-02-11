//@ts-nocheck
import HyperExpress from "hyper-express";
import { createPageRenderer } from "vite-plugin-ssr";
import * as vite from "vite";

const root = `${__dirname}/..`;
const key = root + "/certs/voice-in.com+5-key.pem";
const cert = root + "/certs/voice-in.com+5.pem";
const app = new HyperExpress.Server({
  cert_file_name: cert,
  key_file_name: key,
});
const isProduction = process.env.NODE_ENV === "production";

let viteDevServer;
const createApp = async () => {
  viteDevServer = await vite.createServer({
    root,
    server: { middlewareMode: "ssr" },
  });
  //@ts-ignore
  app.use(viteDevServer.middlewares);
  const renderPage = createPageRenderer({ viteDevServer, isProduction, root });
  app.get("/*", async (req, res, next) => {
    console.log("hello");
    const Aurl = req.originalUrl;
    const pageContextInit = {
      url: Aurl,
    };

    const pageContext = await renderPage(pageContextInit);
    const { httpResponse, redirectTo } = pageContext;

    if (redirectTo) return res.status(307).redirect(redirectTo);
    if (!httpResponse) return next();
    const stream = await httpResponse.getNodeStream();
    const { statusCode, contentType } = httpResponse;
    res.status(statusCode).type(contentType);
    stream.pipe(res.writable);
  });
  app
    .listen(3000)
    .then((socket) => console.log("Webserver started on port 80"))
    .catch((error) => console.log("Failed to start webserver on port 80"));
};

createApp();
