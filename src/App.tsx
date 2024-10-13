import { useState } from "react";
import "./App.css";
import SearchInput from "./components/searchInput/SearchInput";
import SearchResults from "./components/SearchResults";
import useMovies from "./hooks/useMovies";
import { MovieQuery } from "./types";

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({ page: 1, query: "" });
  const { movies } = useMovies(movieQuery);

  return (
    <>
      <header className="header">
        <h1>Movierama</h1>
        <SearchInput onSearch={(searchTerm) => setMovieQuery({...movieQuery, query: searchTerm})} />
      </header>
      <main className="content">
        <h3
          id="error-message"
          className="error-message"
          style={{ display: "none" }}
        >
          Error
        </h3>
        <SearchResults movies={movies} searchText={movieQuery.query} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
