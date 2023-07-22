import React from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "../components/Carousel";

describe("Carousel", () => {
  const validProps = {
    mockImages: [
      { "image-url": "mock-url1", id: "1" },
      { "image-url": "mock-url2", id: "2" },
    ],
  };

  it("renders correctly", () => {
    const { asFragment } = render(<Carousel slides={validProps.mockImages} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct image", () => {
    render(<Carousel slides={validProps.mockImages} />);

    expect(screen.getByTestId("current__image")).toBeInTheDocument();
  });
});
