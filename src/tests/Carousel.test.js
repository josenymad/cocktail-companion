import React from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "../components/Carousel";

describe("Carousel", () => {
  const validProps = {
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
    const { asFragment } = render(<Carousel slides={validProps.drinks} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct image", () => {
    render(<Carousel slides={validProps.drinks} />);

    expect(screen.getByAltText("cocktail")).toBeInTheDocument();
  });

  it("renders the correct title", () => {
    render(<Carousel slides={validProps.drinks} />);

    expect(screen.getByText("mock-title1")).toBeInTheDocument();
  });
});
