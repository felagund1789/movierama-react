import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from "vitest";
import useGenres from "../../hooks/useGenres";
import { Movie } from "../../types";
import MovieCard from "./MovieCard";

// Mock useGenres hook
vi.mock("../../hooks/useGenres", () => ({
  default: vi.fn(),
}));

const mockGenres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
];

const mockMovie: Movie = {
  id: 1,
  adult: false,
  title: "Test Movie",
  original_title: "Test Movie",
  poster_path: "/test-poster.jpg",
  backdrop_path: "/test-backdrop.jpg",
  release_date: "2022-01-01",
  vote_average: 8.5,
  genre_ids: [1, 2],
  original_language: "en",
  popularity: 46,
  vote_count: 100,
  video: false,
  overview: "Test movie overview.",
};

describe("MovieCard", () => {
  beforeEach(() => {
    (useGenres as Mock).mockReturnValue({ data: mockGenres });
  });

  afterEach(() => cleanup());

  it("should render correctly", () => {
    render(<MovieCard movie={mockMovie} onClick={() => {}} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("8.5")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Comedy")).toBeInTheDocument();
    expect(
      screen.getByText("Test movie overview.")
    ).toBeInTheDocument();
  });

  it("displays placeholder image when poster_path is empty", () => {
    const movieWithoutPoster = { ...mockMovie, poster_path: "" };
    render(<MovieCard movie={movieWithoutPoster} onClick={() => {}} />);

    expect(screen.getByRole("img").getAttribute("src")).toContain(
      "poster-placeholder-dark.png"
    );
  });
});
