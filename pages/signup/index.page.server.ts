import { $fetch } from "ohmyfetch";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
import dotenv from "dotenv";

dotenv.config();
export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  //@ts-ignore
  const { code } = pageContext.urlParsed.search;
  let resultObj = {
    clientid: process.env.github_client_id,
  } as any;
  if (code) {
    await $fetch(
      `https://github.com/login/oauth/access_token?client_id=${process.env.github_client_id}&client_secret=${process.env.github_client_secret}&code=${code}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((res) => {
        resultObj = {
          ...res,
          git: "github",
          clientid: process.env.github_client_id,
        };
      })
      .catch((err) => {
        console.log("git error", err);
      });
  }

  // console.log("run server", pageContext.urlParsed.search);
  return {
    pageContext: {
      pageProps: {
        git: resultObj,
      },
    },
  };
}
