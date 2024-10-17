import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Review } from "../../types";
import ReviewCard from "./ReviewCard";

const mockReview: Review = {
  id: "1",
  author: "John Doe",
  content: "This is a great movie!\nI really enjoyed it.",
  url: "http://example.com/review",
  author_details: {
    avatar_path: "/avatar.jpg",
    username: "johndoe",
    name: "John Doe",
    rating: 7,
  },
  created_at: "2022-01-01",
  updated_at: "2022-01-01",
};

describe("ReviewCard", () => {
  it("should render the review content", () => {
    render(<ReviewCard review={mockReview} />);
    expect(screen.getByText("This is a great movie!")).toBeInTheDocument();
    expect(screen.getByText("I really enjoyed it.")).toBeInTheDocument();
  });

  it("should render the author details", () => {
    render(<ReviewCard review={mockReview} />);
    expect(screen.getByAltText("johndoe")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("@johndoe")).toBeInTheDocument();
  });

  it("should render the review link", () => {
    render(<ReviewCard review={mockReview} />);
    expect(screen.getByText("John Doe's review:")).toHaveAttribute(
      "href",
      "http://example.com/review"
    );
  });

  it("should render the correct number of stars based on rating", () => {
    render(<ReviewCard review={mockReview} />);
    const fullStars = screen.queryAllByLabelText(/full-star/i);
    const halfStars = screen.queryAllByLabelText(/half-star/i);
    const emptyStars = screen.queryAllByLabelText(/empty-star/i);
    // 7/2 = 3 full stars and 1 half star
    expect(fullStars.length).toBe(3); 
    expect(halfStars.length).toBe(1); 
    expect(emptyStars.length).toBe(1); 
  });
});
