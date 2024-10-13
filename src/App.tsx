import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/movieCard/MovieCard";
import SearchInput from "./components/searchInput/SearchInput";
import movieService from "./services/movieService";
import { Movie } from "./types";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    movieService.getNowPlaying({ page: 1 }).then((response) => {
      setMovies(response.results);
    });
  }, []);

  return (
    <>
      <header className="header">
        <h1>Movierama</h1>
        <SearchInput onSearch={(searchTerm) => console.log(searchTerm)} />
      </header>
      <main className="content">
        <h3
          id="error-message"
          className="error-message"
          style={{ display: "none" }}
        >
          Error
        </h3>
        <h2 id="page-title" className="page-title">
          In Theaters
        </h2>
        <div className="results">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
