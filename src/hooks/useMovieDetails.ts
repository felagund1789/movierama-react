import { useQuery } from "react-query";
import movieService from "../services/movieService";
import { MovieDetails } from "../types";

const useMovieDetails = (movieId: number) => {
  return useQuery<MovieDetails, Error>({
    queryKey: ["movies", movieId],
    queryFn: async () => {
      return movieService.getMovieDetails(movieId);
    },
  });
};

export default useMovieDetails;
