import { MovieQuery, MoviesResponse } from "../types";
import apiClient from "./apiClient";

class MovieService {
  
  getNowPlaying = async ({ page }: { page: number }): Promise<MoviesResponse> => {
    return apiClient.fetch<MoviesResponse>(`/movie/now_playing?page=${page.toString()}`);
  }

  searchMovies = async ({ page, query }: MovieQuery): Promise<MoviesResponse> => {
    return apiClient.fetch<MoviesResponse>(`/search/movie?query=${encodeURIComponent(query)}&page=${page.toString()}`);
  }
}

const movieService = new MovieService();

export default movieService;
