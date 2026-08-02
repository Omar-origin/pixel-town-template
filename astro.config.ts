import { defineConfig } from "astro/config";

const [owner = "", repository = ""] = (
  process.env.GITHUB_REPOSITORY ?? ""
).split("/");
const isUserOrOrganizationSite =
  repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const githubPagesBase =
  process.env.GITHUB_ACTIONS === "true" && repository && !isUserOrOrganizationSite
    ? `/${repository}`
    : "/";
const githubPagesSite = owner ? `https://${owner}.github.io` : undefined;

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL || githubPagesSite,
  base: githubPagesBase,
});
