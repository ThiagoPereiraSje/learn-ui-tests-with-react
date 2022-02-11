import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("Testing App Component", () => {
  test("your content should be 'Learn React'", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
