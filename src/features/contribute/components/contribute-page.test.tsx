import { render, screen } from "@testing-library/react";

import { ContributePage } from "./contribute-page";

describe("ContributePage", () => {
  it("documents the contributor quality gates", () => {
    render(<ContributePage />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /a clean entry point for developers/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("npm run test:run")).toBeInTheDocument();
    expect(
      screen.getByText(/strict typescript, tests, and ci coverage/i),
    ).toBeInTheDocument();
  });
});
