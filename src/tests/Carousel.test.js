import React from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "../components/Carousel";

describe("Carousel", () => {
  const validProps = {
    selectedDrink: ["mock-property"],
    searchQuery: "mock-drink",
    setSelectedDrink: jest.fn(),
    drinks: [
      {
        idDrink: "1",
        strDrinkThumb: "mock-url1",
        strDrink: "mock-title1",
      },
      {
        idDrink: "2",
        strDrinkThumb: "mock-url2",
        strDrink: "mock-title2",
      },
    ],
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Carousel
        selectedDrink={validProps.selectedDrink}
        searchQuery={validProps.searchQuery}
        setSelectedDrink={validProps.setSelectedDrink}
        slides={validProps.drinks}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct image", () => {
    render(
      <Carousel
        selectedDrink={validProps.selectedDrink}
        searchQuery={validProps.searchQuery}
        setSelectedDrink={validProps.setSelectedDrink}
        slides={validProps.drinks}
      />,
    );

    expect(screen.getByAltText("cocktail")).toBeInTheDocument();
  });

  it("renders the correct title", () => {
    render(
      <Carousel
        selectedDrink={validProps.selectedDrink}
        searchQuery={validProps.searchQuery}
        setSelectedDrink={validProps.setSelectedDrink}
        slides={validProps.drinks}
      />,
    );

    expect(screen.getByText("mock-title1")).toBeInTheDocument();
  });
});
