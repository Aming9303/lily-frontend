import { render, screen } from "@testing-library/react";

import { HomePage } from "./home-page";

describe("HomePage", () => {
  it("renders the contributor-focused landing experience", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /the financial layer for software agents/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /open contributor guide/i }),
    ).toHaveAttribute("href", "/contribute");

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /a frontend that can grow with the protocol stack/i,
      }),
    ).toBeInTheDocument();
  });
});
