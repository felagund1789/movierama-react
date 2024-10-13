import { Movie } from "../types";
import apiClient from "./apiClient";

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

class MovieService {
  
  getNowPlaying = async ({ page }: { page: number }): Promise<MoviesResponse> => {
    return apiClient.fetch<MoviesResponse>(`/movie/now_playing?page=${page.toString()}`);
  }
}

const movieService = new MovieService();

export default movieService;
