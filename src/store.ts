import { create } from "zustand";

interface MovieQuery {
  page: number;
  query: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setPage: (page: number | undefined) => void;
  setQuery: (query: string) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: { page: 1, query: "" },
  setQuery: (query) =>
    set(() => ({
      movieQuery: { query, page: 1 },
    })),
  setPage: (page) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, page: page ?? 1 },
    })),
}));

export default useMovieQueryStore;
