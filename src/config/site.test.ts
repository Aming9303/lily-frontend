import {
  createPageMetadata,
  createSiteMetadata,
  getAbsoluteUrl,
  routes,
  siteConfig,
} from "./site";

describe("site config", () => {
  it("creates consistent metadata", () => {
    const metadata = createSiteMetadata();

    expect(metadata.applicationName).toBe(siteConfig.name);
    expect(metadata.title).toEqual({
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    });
    expect(metadata.metadataBase?.toString()).toBe(`${siteConfig.url}/`);
    expect(metadata.alternates?.canonical).toBe(siteConfig.url);
  });

  it("creates route-specific canonical metadata", () => {
    expect(createPageMetadata(routes.home).alternates?.canonical).toBe(
      siteConfig.url,
    );
    expect(createPageMetadata(routes.docs).alternates?.canonical).toBe(
      `${siteConfig.url}${routes.docs}`,
    );
  });

  it("builds absolute page urls from typed routes", () => {
    expect(getAbsoluteUrl(routes.home)).toBe(siteConfig.url);
    expect(getAbsoluteUrl(routes.docs)).toBe(
      `${siteConfig.url}${routes.docs}`,
    );
  });
});
