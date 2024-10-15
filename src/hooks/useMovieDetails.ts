import { useQuery } from "react-query";
import movieService from "../services/movieService";
import { MovieDetails } from "../types";

const useMovieDetails = (movieId: number) => {
  return useQuery<MovieDetails, Error>({
    queryKey: ["movies", movieId],
    queryFn: async () => {
      return movieService.getMovieDetails(movieId);
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export default useMovieDetails;
