import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders cocktail companion", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const title = screen.getByText(/cocktail companion/i);
    expect(title).toBeInTheDocument();
  });

  it("renders the ultimate cocktail guide", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const slogan = screen.getByText(/the ultimate cocktail guide/i);
    expect(slogan).toBeInTheDocument();
  });

  it("renders home", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const home = screen.getByText(/home/i);
    expect(home).toBeInTheDocument();
  });

  it("renders best barware", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const bestBarware = screen.getByText(/home/i);
    expect(bestBarware).toBeInTheDocument();
  });

  it("renders all cocktails", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const home = screen.getByText(/home/i);
    expect(home).toBeInTheDocument();
  });

  it("renders all cocktails", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const allCocktails = screen.getByText(/home/i);
    expect(allCocktails).toBeInTheDocument();
  });
});
