import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../SearchBar";

describe("SearchBar Component", () => {
  it("renders with correct placeholder and hint text", () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText("Search show");
    const hintElement = getByText("e.g. search for batman");

    expect(inputElement).toBeInTheDocument();
    expect(hintElement).toBeInTheDocument();
  });

  it("applies the correct CSS class to the search bar", () => {
    const { container } = render(<SearchBar />);
    const searchBarElement = container.firstChild;

    expect(searchBarElement).toHaveClass("searchbar");
  });
});
