import { MovieQuery, MoviesResponse } from "../types";
import apiClient from "./apiClient";

class MovieService {

  getNowPlaying = async ({ page }: { page: number }): Promise<MoviesResponse> => {
    return apiClient.fetch<MoviesResponse>("/movie/now_playing", { params: { page } });
  }

  searchMovies = async ({ page, query }: MovieQuery): Promise<MoviesResponse> => {
    return apiClient.fetch<MoviesResponse>("/search/movie", { params: { query, page } });
  }
}

const movieService = new MovieService();

export default movieService;
