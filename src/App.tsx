import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css";
import MovieDetailsDialog from "./components/movieDetails/MovieDetailsDialog";
import MovieGrid from "./components/MovieGrid";
import SearchInput from "./components/searchInput/SearchInput";
import { MovieQuery } from "./types";

function App() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movieQuery, setMovieQuery] = useState<MovieQuery>({
    page: 1,
    query: "",
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);

  const toggleScrollBar = (show: boolean) =>
    (document.body.style.overflow = show ? "auto" : "hidden");

  useEffect(() => {
    if (movieId && !isNaN(Number(movieId))) {
      setSelectedMovie(Number(movieId));
      setOpenDialog(true);
    }
  }, [movieId]);

  return (
    <>
      <header className="header">
        <h1>Movierama</h1>
        <SearchInput
          onSearch={(searchTerm) =>
            setMovieQuery({ ...movieQuery, query: searchTerm })
          }
        />
      </header>
      <main className="content">
        {selectedMovie && (
          <MovieDetailsDialog
            movieId={selectedMovie}
            isOpen={openDialog}
            closeDialog={() => {
              toggleScrollBar(true);
              setOpenDialog(false);
              navigate("/");
            }}
            onMovieSelected={(movie) => navigate(`/movies/${movie.id}`)}
          />
        )}
        <MovieGrid
          movieQuery={movieQuery}
          onMovieSelected={(movie) => {
            toggleScrollBar(false);
            navigate(`/movies/${movie.id}`);
            setOpenDialog(true);
          }}
        />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
