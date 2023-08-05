import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("displays an error message", () => {
    const { getByText, asFragment } = render(
      <Alert alert="Something went wrong" />,
    );

    expect(getByText(/Something went wrong/).textContent).toBe(
      "Something went wrong",
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not display a message if the alert prop is an empty string", () => {
    const { asFragment } = render(<Alert alert="" />);
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });
});
