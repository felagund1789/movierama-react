import { useQuery } from "react-query";
import trailerService from "../services/trailerService";
import { Trailer } from "../types";

const useMovieTrailers = (movieId: number) => {
  return useQuery<Trailer[], Error>({
    queryKey: ["movies", movieId, "trailers"],
    queryFn: async () => {
      return trailerService
        .getMovieTrailers(movieId)
        .then((response) => response.results);
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export default useMovieTrailers;
