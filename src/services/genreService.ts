import { GenresResponse } from "../types";
import apiClient from "./apiClient";

class GenreService {
  fetchGenres = async () => {
    return apiClient.fetch<GenresResponse>("/genre/movie/list?");
  };
}

const genreService = new GenreService();

export default genreService;
