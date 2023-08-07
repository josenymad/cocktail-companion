import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home", () => {
  const validProps = {
    drinksData: {
      drinks: [
        {
          idDrink: "1",
          image: "mock-url1",
          title: "mock-title",
        },
      ],
    },
    searchQuery: "mock-drink",
    setSelectedDrink: jest.fn(),
    selectedDrink: ["mock-property"],
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Home
        drinksData={validProps.drinksData}
        searchQuery={validProps.searchQuery}
        setSelectedDrink={validProps.setSelectedDrink}
        selectedDrink={validProps.selectedDrink}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct text", () => {
    render(
      <Home
        drinksData={validProps.drinksData}
        searchQuery={validProps.searchQuery}
        setSelectedDrink={validProps.setSelectedDrink}
        selectedDrink={validProps.selectedDrink}
      />,
    );

    expect(
      screen.getByText(/welcome to cocktail companion/i),
    ).toBeInTheDocument();
  });
});
