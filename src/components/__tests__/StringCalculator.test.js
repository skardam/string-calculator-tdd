import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "../StringCalculator";

describe("StringCalculator Component", () => {
  test("renders calculator with form and button", () => {
    render(<StringCalculator />);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/E.g.,.+/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Calculate/i })
    ).toBeInTheDocument();
  });

  test("displays result when valid input is submitted", () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText(/E.g.,.+/);
    const button = screen.getByRole("button", { name: /Calculate/i });

    fireEvent.change(input, { target: { value: "1,2,3" } });
    fireEvent.click(button);

    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("displays error for negative numbers", () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText(/E.g.,.+/);
    const button = screen.getByRole("button", { name: /Calculate/i });

    fireEvent.change(input, { target: { value: "-1,2" } });
    fireEvent.click(button);

    expect(
      screen.getByText(/negative numbers not allowed/i)
    ).toBeInTheDocument();
  });
});
