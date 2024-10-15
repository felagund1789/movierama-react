import { useQuery } from "react-query";
import reviewService from "../services/reviewService";
import { Review } from "../types";

const useMovieReviews = (movieId: number) => {
  return useQuery<Review[], Error>({
    queryKey: ["movies", movieId, "reviews"],
    queryFn: async () => {
      return reviewService
        .getMovieReviews(movieId)
        .then((response) => response.results);
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export default useMovieReviews;
