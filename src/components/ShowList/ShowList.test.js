import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShowList from "../ShowList";

describe("ShowList Component", () => {
  it("renders error message when shows is empty", () => {
    const { getByText } = render(<ShowList shows={[]} />);
    const errorMessage = getByText("No shows found");
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders error message when shows is null", () => {
    const { getByText } = render(<ShowList shows={null} />);
    const errorMessage = getByText("No shows found");
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders Miniature components when shows is not empty", () => {
    const shows = [
      { id: 1, name: "Show 1", summary: "Summary 1" },
      { id: 2, name: "Show 2", summary: "Summary 2" },
    ];
    const { getByText } = render(<ShowList shows={shows} />);
    shows.map((show) => {
      const nameElement = getByText(show.name);
      const summaryElement = getByText(show.summary);
      expect(nameElement).toBeInTheDocument();
      expect(summaryElement).toBeInTheDocument();
    });
  });
});
