import { $fetch } from "ohmyfetch";
import { buildUrl } from "build-url-ts";
import { Octokit } from "octokit";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
import dotenv from "dotenv";

dotenv.config();
export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  //@ts-ignore
  const { code } = pageContext.urlParsed.search;
  if (!code) {
    return {
      pageContext: {
        //@ts-ignore
        redirectTo: "/signup",
      },
    };
  }
  const url = buildUrl(`https://github.com/login/oauth/access_token`, {
    queryParams: {
      code: code,
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
    },
  });
  const e = await $fetch(url, {
    method: "POST",
    body: { some: "json" },
  });
  const { error, access_token } = e;
  if (error) {
    return {
      pageContext: {
        //@ts-ignore
        redirectTo: "/signup",
      },
    };
  }
  if (access_token) {
    const octokit = new Octokit({ auth: access_token });
    const user = await $fetch("https://api.github.com/user", {
      headers: {
        Authorization: `token ${access_token}`,
      },
    });

    return {
      pageContext: {
        token: access_token,
        pageProps: {
          token: access_token,
        },
      },
    };
  }
}
