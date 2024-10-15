import { useQuery } from "react-query";
import creditService from "../services/creditService";
import { Cast } from "../types";

const useMovieCast = (movieId: number) => {
  return useQuery<Cast[], Error>({
    queryKey: ["movies", movieId, "cast"],
    queryFn: async () => {
      return creditService
        .getMovieCredits(movieId)
        .then((response) => response.cast);
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export default useMovieCast;
