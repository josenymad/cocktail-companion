import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/Navbar";

describe("NavBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
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
    const bestBarware = screen.getByText(/best barware/i);

    expect(bestBarware).toBeInTheDocument();
  });

  it("renders all cocktails", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const allCocktails = screen.getByText(/all cocktails/i);

    expect(allCocktails).toBeInTheDocument();
  });

  it("renders a search input", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const searchInput = screen.getByPlaceholderText(/margarita/i);

    expect(searchInput).toBeInTheDocument();
  });

  it("renders a search button", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const searchButton = screen.getByRole("button");

    expect(searchButton).toBeInTheDocument();
  });
});
