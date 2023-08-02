import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Title from "../components/Title";

describe("Title", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Title />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders cocktail companion", () => {
    render(
      <MemoryRouter>
        <Title />
      </MemoryRouter>,
    );
    const title = screen.getByText(/cocktail companion/i);
    expect(title).toBeInTheDocument();
  });

  it("renders the ultimate cocktail guide", () => {
    render(
      <MemoryRouter>
        <Title />
      </MemoryRouter>,
    );
    const slogan = screen.getByText(/the ultimate cocktail guide/i);
    expect(slogan).toBeInTheDocument();
  });
});
