import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieGrid from "../components/MovieGrid";
import Navbar from "../components/Navbar";
import { MovieQuery } from "../types";
import "../App.css";

function MoviesPage() {
  const navigate = useNavigate();

  const [movieQuery, setMovieQuery] = useState<MovieQuery>({
    page: 1,
    query: "",
  });

  return (
    <>
      <header className="header">
        <Navbar onSearch={(query) => setMovieQuery({ page: 1, query })} />
      </header>
      <main className="content">
        <MovieGrid
          movieQuery={movieQuery}
          onMovieSelected={(movie) => {
            navigate(`/movies/${movie.id}`);
          }}
        />
      </main>
      <footer></footer>
    </>
  );
}

export default MoviesPage;
