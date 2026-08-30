import { describe, expect, it } from "vitest";

import robots from "./robots";
import sitemap from "./sitemap";

describe("crawler metadata", () => {
  it("blocks the authenticated app tree while allowing public routes", () => {
    const metadata = robots();

    expect(metadata.rules).toEqual({
      userAgent: "*",
      allow: "/",
      disallow: "/app",
    });
  });

  it("keeps the sitemap limited to public pages", () => {
    const urls = sitemap().map(({ url }) => new URL(url).pathname);

    expect(urls).toContain("/about");
    expect(urls.every((path) => !path.startsWith("/app"))).toBe(true);
  });
});
