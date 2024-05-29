import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";
import styles from "../Card.module.scss";

describe("Card Component", () => {
  it("renders children", () => {
    render(<Card>Hello, World!</Card>);
    const childElement = screen.getByText("Hello, World!");
    expect(childElement).toBeInTheDocument();
  });

  it("applies the card class", () => {
    render(<Card>Hello, World!</Card>);
    const cardElement = screen.getByText("Hello, World!").closest("div");
    expect(cardElement).toHaveClass(styles.card);
  });

  it("applies the error class when error prop is true", () => {
    render(<Card error="true">Hello, World!</Card>);
    const cardElement = screen.getByText("Hello, World!").closest("div");
    expect(cardElement).toHaveClass(styles.err);
  });

  it("does not apply the error class when error prop is false", () => {
    render(<Card>Hello, World!</Card>);
    const cardElement = screen.getByText("Hello, World!").closest("div");
    expect(cardElement).not.toHaveClass(styles.err);
  });
});
