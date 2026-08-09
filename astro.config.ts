import { defineConfig } from "astro/config";

import { getGitHubPagesDeployment } from "./src/config/deployment";

const deployment = getGitHubPagesDeployment({
  githubActions: process.env.GITHUB_ACTIONS === "true",
  githubRepository: process.env.GITHUB_REPOSITORY,
});

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL || deployment.site,
  base: deployment.base,
});
