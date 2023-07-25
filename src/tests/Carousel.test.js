import React from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "../components/Carousel";

describe("Carousel", () => {
  const validProps = {
    drinks: [
      {
        idDrink: "1",
        image: "mock-url1",
        title: "mock-title",
      },
      {
        idDrink: "2",
        image: "mock-url2",
        title: "mock-title",
      },
    ],
  };

  it("renders correctly", () => {
    const { asFragment } = render(<Carousel slides={validProps.drinks} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct image", () => {
    render(<Carousel slides={validProps.drinks} />);

    expect(screen.getByTestId("current__image")).toBeInTheDocument();
  });
});
