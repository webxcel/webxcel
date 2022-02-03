//@ts-nocheck
import createapp from "./app";
import https from "https";
import { readFileSync } from "fs";
import mongoose from "mongoose";
import { provideTelefuncContext } from "telefunc";
import { errorConverter, errorHandler } from "../api/middlewares/error";
import ApiError from "../api/utils/ApiError";
import config from "../api/config/config";
import logger from "../api/config/logger";
import passInit from "../api/config/oauth/init";
import { User } from "../api/models/index";
import { findUserOrCreate } from "../api/controllers/user.controller";

const root = `${__dirname}/..`;
const key = readFileSync(root + "/certs/voice-in.com+5-key.pem");
const cert = readFileSync(root + "/certs/voice-in.com+5.pem");

async function startServer() {
  const { app, renderPage } = await createapp;

  mongoose.connect(config.mongoose.url).then((d): any => {
    logger.info("Connected to MongoDB");
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
      const { httpResponse, redirectTo, token, urlPathname } = pageContext;

      if (redirectTo) return res.redirect(307, redirectTo);
      if (!httpResponse) return next();
      const stream = await httpResponse.getNodeStream();
      const { statusCode, contentType } = httpResponse;
      res.status(statusCode).type(contentType);
      stream.pipe(res);
    });

    const port = 3000;
    const server = https.createServer({ key: key, cert: cert }, app);
    server.listen(port);
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
