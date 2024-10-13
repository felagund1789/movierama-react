import { useEffect, useState } from "react";
import movieService from "../services/movieService";
import { Movie, MovieQuery, MoviesResponse } from "../types";

const useMovies = (movieQuery: MovieQuery) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    let moviesResponsePromise: Promise<MoviesResponse>;
    if (movieQuery.query && movieQuery.query.trim().length > 0) {
      moviesResponsePromise = movieService.searchMovies(movieQuery);
    } else {
      moviesResponsePromise = movieService.getNowPlaying(movieQuery);
    }
    moviesResponsePromise
      .then((response) => {
        setMovies(response.results);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setMovies([]);
        setIsLoading(false);
        setError((error as Error).message);
      });
  }, [movieQuery]);

  return { movies, isLoading, error };
};

export default useMovies;
