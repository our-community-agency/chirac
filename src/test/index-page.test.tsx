import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Index from "@/pages/Index";

describe("Index page", () => {
  it("renders the immersive homepage structure", () => {
    render(<Index />);

    expect(
      screen.getByRole("heading", {
        name: /chicago amp turns andrew's work into a presence you can feel/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /learn more/i })).toHaveLength(4);
    expect(
      screen.getByRole("button", { name: /build the creative brief/i }),
    ).toBeInTheDocument();
  });
});
