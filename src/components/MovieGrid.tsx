import useMovies from "../hooks/useMovies";
import { Movie, MovieQuery } from "../types";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import MovieCard from "./movieCard/MovieCard";

interface Props {
  movieQuery: MovieQuery;
  onMovieSelected: (movie: Movie) => void;
}
const MovieGrid = ({ movieQuery, onMovieSelected }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMovies(movieQuery);
  return (
    <>
      <Loading isLoading={isLoading || isFetchingNextPage} />
      {error && <ErrorMessage error={error.message} />}
      <h2 id="page-title" className="page-title">
        {movieQuery.query && movieQuery.query.trim().length > 0
          ? `Search results for "${movieQuery.query}"`
          : "In Theaters"}
      </h2>
      <div className="results">
        {data?.pages.map((page) =>
          page.results.map((movie) => (
            <MovieCard
              key={movie.id}
              onClick={() => onMovieSelected(movie)}
              movie={movie}
            />
          ))
        )}
      </div>
      {hasNextPage && (
        <button
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          className="load-more"
        >
          {isFetchingNextPage ? "Loading" : "Show more"}
        </button>
      )}
    </>
  );
};

export default MovieGrid;
