import { Genre, Movie } from "../types";
import MovieCard from "./movieCard/MovieCard";

interface Props {
  genres: Genre[];
  movies: Movie[];
  searchText: string;
}
const SearchResults = ({ genres, movies, searchText }: Props) => {
  return (
    <>
      <h2 id="page-title" className="page-title">
        {searchText && searchText.trim().length > 0
          ? `Search results for "${searchText}"`
          : "In Theaters"}
      </h2>
      <div className="results">
        {movies.map((movie) => (
          <MovieCard key={movie.id} genres={genres} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
