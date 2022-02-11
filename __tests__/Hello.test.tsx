import React from "react";
import { render } from "@testing-library/react";
import Hello from "../src/packages/components/Hello";

describe("Testing Hello Component", () => {
  test("your content should be 'Hello world!'", () => {
    const { container } = render(<Hello />);
    expect(container.textContent).toBe("Hello world!");
  });
});
