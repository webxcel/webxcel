import { Abort } from "telefunc";
import { Octokit } from "octokit";

export async function getRepo({ token }: { token: string }) {
  if (!token) {
    throw Abort();
  }
  const octokit = new Octokit({ auth: token });
  const orgs = await octokit.rest.orgs.listForAuthenticatedUser();
  const data =
    orgs && orgs.data.length > 0
      ? orgs.data.map((x: any) => {
          return {
            name: x.login,
            avatar: x.avatar_url,
            description: x.description,
            provider: "github",
          };
        })
      : [];
  return {
    orgs: data,
  };
}
