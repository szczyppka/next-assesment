// __tests__/Hero.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Hero"; // Adjust the import path as needed
import DOMPurify from "isomorphic-dompurify";
import styles from "../Hero.module.scss"; // Adjust the import path as needed

jest.mock("isomorphic-dompurify", () => ({
  sanitize: jest.fn((html) => html),
}));

describe("Hero Component", () => {
  it("renders title", () => {
    const title = "Test Title";
    render(<Hero title={title} summary="Test Summary" />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(styles.title);
  });

  it("renders summary", () => {
    const summary = "<p>Test Summary</p>";
    render(<Hero title="Test Title" summary={summary} />);
    const summaryElement = screen.getByText("Test Summary");
    expect(summaryElement).toBeInTheDocument();
    expect(DOMPurify.sanitize).toHaveBeenCalledWith(summary);
  });

  it("renders children", () => {
    const childrenText = "Test Children";
    render(
      <Hero title="Test Title" summary="Test Summary">
        {childrenText}
      </Hero>
    );
    const childrenElement = screen.getByText(childrenText);
    expect(childrenElement).toBeInTheDocument();
    expect(childrenElement).toHaveClass(styles.content);
  });

  it("sanitizes the summary using DOMPurify", () => {
    const summary = '<script>alert("Test")</script><p>Safe Summary</p>';
    render(<Hero title="Test Title" summary={summary} />);
    const summaryElement = screen.getByText("Safe Summary");
    expect(summaryElement).toBeInTheDocument();
    expect(DOMPurify.sanitize).toHaveBeenCalledWith(summary);
  });
});
