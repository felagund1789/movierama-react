import { useInfiniteQuery } from "react-query";
import movieService from "../services/movieService";
import { MovieQuery, MoviesResponse } from "../types";

const useMovies = (movieQuery: MovieQuery) => {
  return useInfiniteQuery<MoviesResponse, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: async ({ pageParam = 1}) => {
      if (movieQuery.query && movieQuery.query.trim().length > 0) {
        return movieService
          .searchMovies({
            query: movieQuery.query,
            page: pageParam,
          })
      } else {
        return movieService
          .getNowPlaying({
            page: pageParam,
          })
      }
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.total_pages === allPages.length) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
};

export default useMovies;
