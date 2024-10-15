import { useQuery } from "react-query";
import creditService from "../services/creditService";
import { Crew } from "../types";

const useMovieCrew = (movieId: number) => {
  return useQuery<Crew[], Error>({
    queryKey: ["movies", movieId, "crew"],
    queryFn: async () => {
      return creditService
        .getMovieCredits(movieId)
        .then((response) => response.crew);
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export default useMovieCrew;
