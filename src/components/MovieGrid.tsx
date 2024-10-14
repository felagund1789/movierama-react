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
  const { data: movies, isLoading, error } = useMovies(movieQuery);
  return (
    <>
      <Loading isLoading={isLoading} />
      {error && <ErrorMessage error={error.message} />}
      <h2 id="page-title" className="page-title">
        {movieQuery.query && movieQuery.query.trim().length > 0
          ? `Search results for "${movieQuery.query}"`
          : "In Theaters"}
      </h2>
      <div className="results">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            onClick={() => onMovieSelected(movie)}
            movie={movie}
          />
        ))}
      </div>
    </>
  );
};

export default MovieGrid;
