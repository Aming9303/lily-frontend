import { render, screen } from "@testing-library/react";

import { getRouteScaffold, routeScaffolds } from "@/config/routes";
import { routes, siteConfig } from "@/config/site";

import { SiteHeader } from "./site-header";

const headerRoutes = [
  { key: "home", routeId: "landing", label: siteConfig.name },
  { key: "docs", routeId: "docs", label: "Docs" },
  { key: "signin", routeId: "signin", label: "Sign in" },
  {
    key: "dashboard",
    routeId: "dashboard-overview",
    label: "Dashboard",
  },
] as const;

describe("SiteHeader", () => {
  it("keeps header route constants aligned with the route registry", () => {
    for (const { key, routeId } of headerRoutes) {
      expect(routes[key]).toBe(getRouteScaffold(routeId).path);
    }
  });

  it("renders each registered header link with its expected label", () => {
    render(<SiteHeader />);

    for (const { key, label } of headerRoutes) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        routes[key],
      );
    }
  });

  it("does not render links outside the route registry", () => {
    render(<SiteHeader />);

    const registeredPaths = new Set<string>(
      routeScaffolds.map((route) => route.path),
    );
    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(headerRoutes.length);
    for (const link of links) {
      expect(registeredPaths.has(link.getAttribute("href") ?? "")).toBe(true);
    }
  });
});
