import { useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import SearchInput from "./components/searchInput/SearchInput";
import SearchResults from "./components/SearchResults";
import useMovies from "./hooks/useMovies";
import { MovieQuery } from "./types";

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({ page: 1, query: "" });
  const { data: movies, isLoading, error } = useMovies(movieQuery);

  return (
    <>
      <header className="header">
        <h1>Movierama</h1>
        <SearchInput onSearch={(searchTerm) => setMovieQuery({...movieQuery, query: searchTerm})} />
      </header>
      <main className="content">
        <Loading isLoading={isLoading} />
        { error && <ErrorMessage error={error.message} /> }
        <SearchResults movies={movies} searchText={movieQuery.query} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
