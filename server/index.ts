//@ts-nocheck
import createapp from "./app";
import https from "https";
import { readFileSync } from "fs";
import mongoose from "mongoose";
import config from "../config/config";
import { Server } from "rpc-websockets";

const WebSocketServer = Server;
const root = `${__dirname}/..`;
const key = readFileSync(root + "/certs/voice-in.com+5-key.pem");
const cert = readFileSync(root + "/certs/voice-in.com+5.pem");

async function startServer() {
  const { app, renderPage } = await createapp;

  mongoose.connect(config.mongoose.url).then((d): any => {
    console.info("Connected to MongoDB");
    const client = new Promise(function (resolve, reject) {
      resolve(d.connection.getClient());
      reject(new Error("MongoClient Error"));
    });

    app.get("*", async (req, res, next) => {
      const Aurl = req.originalUrl;
      const pageContextInit = {
        url: Aurl,
      };

      const pageContext = await renderPage(pageContextInit);
      const { httpResponse, redirectTo } = pageContext;

      if (redirectTo) return res.redirect(307, redirectTo);
      if (!httpResponse) return next();
      const stream = await httpResponse.getNodeStream();
      const { statusCode, contentType } = httpResponse;
      res.status(statusCode).type(contentType);
      stream.pipe(res);
    });

    const port = 3000;
    const server = https.createServer({ key: key, cert: cert }, app);
    const ws = new WebSocketServer({
      server,
    });
    ws.register("getSum", function (params) {
      return params[0] + params[1];
    });
    server.listen(port);
    console.log(`Server running at https://localhost:${port}`);
  });
}

startServer();
