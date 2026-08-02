import { describe, expect, it } from "vitest";

import { siteConfig } from "../src/config/site";

describe("siteConfig", () => {
  it("provides the resident identity required by the homepage", () => {
    expect(siteConfig.resident.name.trim()).not.toBe("");
    expect(siteConfig.resident.introduction.trim()).not.toBe("");
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
