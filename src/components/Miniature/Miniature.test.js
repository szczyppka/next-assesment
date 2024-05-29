import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Miniature from "../Miniature";

describe("Miniature Component", () => {
  it("renders name, summary, and link", () => {
    const name = "Test Show";
    const summary = "<p>Test Summary</p>";
    const id = "1";

    render(<Miniature name={name} summary={summary} id={id} />);

    const nameElement = screen.getByText(name);
    const summaryElement = screen.getByText("Test Summary");
    const linkElement = screen.getByText("read more");

    expect(nameElement).toBeInTheDocument();
    expect(summaryElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();

    expect(linkElement.closest("a")).toHaveAttribute("href", `/show/${id}`);
  });

  it("sanitizes the summary using DOMPurify", () => {
    const summary = '<script>alert("Test")</script><p>Safe Summary</p>';

    render(<Miniature name="Test Show" summary={summary} id="1" />);

    const sanitizedSummaryElement = screen.getByText("Safe Summary");

    expect(sanitizedSummaryElement).toBeInTheDocument();
    expect(sanitizedSummaryElement).not.toHaveTextContent("script");
  });
});
