import { useQuery } from "react-query";
import movieService from "../services/movieService";
import { Movie, MovieQuery } from "../types";

const useMovies = (movieQuery: MovieQuery) => {
  return useQuery<Movie[], Error>({
    queryKey: ["movies", movieQuery],
    queryFn: async () => {
      if (movieQuery.query && movieQuery.query.trim().length > 0) {
        return movieService
          .searchMovies(movieQuery)
          .then((response) => response.results);
      } else {
        return movieService
          .getNowPlaying(movieQuery)
          .then((response) => response.results);
      }
    },
  });
};

export default useMovies;
