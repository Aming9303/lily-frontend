import { render, screen } from "@testing-library/react";

import { getRouteScaffold } from "@/config/routes";

import { PageScaffold } from "./page-scaffold";

describe("PageScaffold", () => {
  it("renders implementation guidance for a scaffolded route", () => {
    render(<PageScaffold route={getRouteScaffold("landing")} />);

    expect(
      screen.getByRole("heading", { level: 1, name: /landing page/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("/")).toBeInTheDocument();
    expect(
      screen.getByText(/contributors should implement the real experience from the approved figma design/i),
    ).toBeInTheDocument();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("announces a provided status message politely", () => {
    render(
      <PageScaffold
        route={getRouteScaffold("agents")}
        statusMessage="Loading agents..."
      />,
    );

    expect(screen.getByRole("status")).toHaveTextContent("Loading agents...");
    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
    expect(screen.getByRole("status")).toHaveAttribute("aria-atomic", "true");
  });
});
