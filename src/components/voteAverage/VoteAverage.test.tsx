import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import VoteAverage from "./VoteAverage";

describe("VoteAverage", () => {
  it("should be green if the rounded average is >= 8.5", () => {
    const average = 8.456;

    render(<VoteAverage average={average} />);
    const heading = screen.getByRole("heading", { name: average.toFixed(1) });
    expect(heading).toHaveClass("green");
  });

  it("should be orange if the rounded average is >= 6.5 and < 8.5", () => {
    const average = 8.214;

    render(<VoteAverage average={average} />);
    const heading = screen.getByRole("heading", { name: average.toFixed(1) });
    expect(heading).toHaveClass("orange");
  });

  it("should be red if the rounded average is < 6.5", () => {
    const average = 6;

    render(<VoteAverage average={average} />);
    const heading = screen.getByRole("heading", { name: average.toFixed(1) });
    expect(heading).toHaveClass("red");
  });
});
