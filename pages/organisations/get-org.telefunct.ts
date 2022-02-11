import { Abort } from "telefunc";
import { Octokit } from "octokit";

export async function getOrg({ token, org }: { token: string; org: string }) {
  if (!token) {
    throw Abort();
  }
  const octokit = new Octokit({ auth: token });
  const orgs = await octokit.rest.orgs.get({
    org,
  });

  return {
    orgs,
  };
}
