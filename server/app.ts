import express from "express";
import { createPageRenderer } from "vite-plugin-ssr";
import * as vite from "vite";
import { telefunc, telefuncConfig, provideTelefuncContext } from "telefunc";
import helmet from "helmet";
//@ts-ignore
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";
//@ts-ignore
import compression from "compression";

const isProduction = process.env.NODE_ENV === "production";
const root = `${__dirname}/..`;

const createApp = async () => {
  const app = express();
  // set security HTTP headers
  // app.use(
  //   helmet({
  //     contentSecurityPolicy: false,
  //   })
  // );

  // parse json request body
  app.use(express.json());

  app.use(express.text()); // Parse & make HTTP request body available at `req.body`

  // parse urlencoded request body
  app.use(express.urlencoded({ extended: true }));


  // app.use(
  //   cors({
  //     origin: true,
  //     credentials: true,
  //   })
  // );
  // //@ts-ignore
  // app.options("*", cors());

  let viteDevServer;
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`));
  } else {
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: "ssr" },
    });
    app.use(viteDevServer.middlewares);
    telefuncConfig.viteDevServer = viteDevServer;
  }

  app.all("/_telefunc", async (req, res, next) => {
    const httpResponse = await telefunc({
      url: req.originalUrl,
      method: req.method,
      body: req.body,
    });
    if (!httpResponse) return next();
    const { body, statusCode, contentType } = httpResponse;
    res.status(statusCode).type(contentType).send(body);
  });
  const renderPage = createPageRenderer({ viteDevServer, isProduction, root });

  return { app, renderPage };
};

export default createApp();
