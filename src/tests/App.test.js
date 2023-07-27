import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", async () => {
    const mockData = {
      drinks: [
        {
          idDrink: "1",
          image: "mock-url1",
          title: "mock-title1",
        },
      ],
    };
    jest.spyOn(axios, "get").mockResolvedValue(mockData);
    const { asFragment } = await render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
