import { useState } from "react";
import "./App.css";
import MovieGrid from "./components/MovieGrid";
import SearchInput from "./components/searchInput/SearchInput";
import { MovieQuery } from "./types";

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({ page: 1, query: "" });

  return (
    <>
      <header className="header">
        <h1>Movierama</h1>
        <SearchInput onSearch={(searchTerm) => setMovieQuery({...movieQuery, query: searchTerm})} />
      </header>
      <main className="content">
        <MovieGrid movieQuery={movieQuery} onMovieSelected={(movie) => alert(movie.title)} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
