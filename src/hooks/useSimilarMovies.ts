import { useQuery } from "react-query";
import movieService from "../services/movieService";
import { Movie } from "../types";

const useSimilarMovies = (movieId: number) => {
  return useQuery<Movie[], Error>({
    queryKey: ["movies", movieId, "similar"],
    queryFn: async () => {
      return movieService
        .getSimilarMovies(movieId)
        .then((response) => response.results);
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export default useSimilarMovies;
