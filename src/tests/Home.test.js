import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct text", () => {
    render(<Home />);

    expect(
      screen.getByText(/welcome to cocktail companion/i),
    ).toBeInTheDocument();
  });
});
