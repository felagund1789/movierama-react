import { Genre } from "../types";
import apiClient from "./apiClient";

interface GenresResponse {
  genres: Genre[];
}

class GenreService {
  fetchGenres = async () => {
    return apiClient.fetch<GenresResponse>("/genre/movie/list?");
  };
}

const genreService = new GenreService();

export default genreService;
