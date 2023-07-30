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
  };

  it("renders correctly", () => {
    const { asFragment } = render(<Home drinksData={validProps.drinksData} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct text", () => {
    render(<Home drinksData={validProps.drinksData} />);

    expect(
      screen.getByText(/welcome to cocktail companion/i),
    ).toBeInTheDocument();
  });
});
