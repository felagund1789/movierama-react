import { useQuery } from "react-query";
import genreService from "../services/genreService";
import { Genre } from "../types";

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      genreService.fetchGenres().then((response) => response.genres),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGenres;
