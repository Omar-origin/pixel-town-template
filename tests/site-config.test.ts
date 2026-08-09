import { describe, expect, it } from "vitest";

import { getGitHubPagesDeployment } from "../src/config/deployment";
import { siteConfig } from "../src/config/site";

describe("siteConfig", () => {
  it("provides the resident identity required by the homepage", () => {
    expect(siteConfig.resident.name.trim()).not.toBe("");
    expect(siteConfig.resident.introduction.trim()).not.toBe("");
    expect(siteConfig.resident.plot.town.trim()).not.toBe("");
    expect(siteConfig.resident.plot.number).toMatch(/^\d{1,3}$/);
    expect(siteConfig.resident.plot.coordinates).toMatch(/^X\d+, Y\d+$/);
    expect(siteConfig.resident.plot.type.trim()).not.toBe("");
    expect(siteConfig.resident.plot.phase.trim()).not.toBe("");
    expect(siteConfig.seo.title.trim()).not.toBe("");
    expect(siteConfig.seo.description.length).toBeLessThanOrEqual(160);
  });

  it("uses absolute HTTPS URLs for external links", () => {
    for (const link of siteConfig.links) {
      const url = new URL(link.href);
      expect(url.protocol).toBe("https:");
    }
  });
});

describe("getGitHubPagesDeployment", () => {
  it("uses the repository name as the GitHub Pages base path", () => {
    expect(
      getGitHubPagesDeployment({
        githubActions: true,
        githubRepository: "Omar-origin/pixel-town-template",
      }),
    ).toEqual({
      base: "/pixel-town-template",
      site: "https://Omar-origin.github.io",
    });
  });

  it("keeps the root base path for user sites and local builds", () => {
    expect(
      getGitHubPagesDeployment({
        githubActions: true,
        githubRepository: "therfen412/therfen412.github.io",
      }).base,
    ).toBe("/");
    expect(getGitHubPagesDeployment().base).toBe("/");
  });
});
