import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
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
  original_title: "Test Movie (Original Title)",
  poster_path: "/test-poster.jpg",
  backdrop_path: "/test-backdrop.jpg",
  release_date: "2022-01-01",
  vote_average: 8.456,
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

  it("should render correctly", () => {
    render(<MovieCard movie={mockMovie} onClick={() => {}} />);

    const year = mockMovie.release_date.substring(0, 4);
    const average = mockMovie.vote_average.toFixed(1);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(year)).toBeInTheDocument();
    expect(screen.getByText(average)).toBeInTheDocument();
    mockGenres.forEach((genre) => {
      expect(screen.getByText(genre.name)).toBeInTheDocument();
    });
    expect(screen.getByText(mockMovie.overview)).toBeInTheDocument();
  });

  it("should call onClick handler when the poster or title is clicked", () => {
    const handleClick = vi.fn();
    render(<MovieCard movie={mockMovie} onClick={handleClick} />);

    fireEvent.click(screen.getByRole("img"));
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Test Movie"));
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it("should display placeholder image when poster_path is empty", () => {
    const movieWithoutPoster = { ...mockMovie, poster_path: "" };
    render(<MovieCard movie={movieWithoutPoster} onClick={() => {}} />);

    expect(screen.getByRole("img").getAttribute("src")).toContain(
      "poster-placeholder-dark.png"
    );
  });
});
