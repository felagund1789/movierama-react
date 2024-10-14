import { Movie } from "../types";
import MovieCard from "./movieCard/MovieCard";

interface Props {
  movies?: Movie[];
  searchText: string;
}
const SearchResults = ({ movies, searchText }: Props) => {
  return (
    <>
      <h2 id="page-title" className="page-title">
        {searchText && searchText.trim().length > 0
          ? `Search results for "${searchText}"`
          : "In Theaters"}
      </h2>
      <div className="results">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
