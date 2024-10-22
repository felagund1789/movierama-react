import { useNavigate } from "react-router-dom";
import "../App.css";
import MovieGrid from "../components/MovieGrid";
import useMovieQueryStore from "../store";

function MoviesPage() {
  const navigate = useNavigate();

  const movieQuery = useMovieQueryStore((state) => state.movieQuery);

  return (
    <MovieGrid
      movieQuery={movieQuery}
      onMovieSelected={(movie) => {
        navigate(`/movies/${movie.id}`);
      }}
    />
  );
}

export default MoviesPage;
