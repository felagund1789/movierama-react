import { useState } from "react";
import "./App.css";
import MovieDetailsDialog from "./components/movieDetails/MovieDetailsDialog";
import MovieGrid from "./components/MovieGrid";
import SearchInput from "./components/searchInput/SearchInput";
import { Movie, MovieQuery } from "./types";

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({
    page: 1,
    query: "",
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const toggleScrollBar = (show: boolean) =>
    (document.body.style.overflow = show ? "auto" : "hidden");

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
            movie={selectedMovie}
            isOpen={openDialog}
            closeDialog={() => {
              toggleScrollBar(true);
              setOpenDialog(false);
            }}
            onMovieSelected={(movie) => setSelectedMovie(movie)}
          />
        )}
        <MovieGrid
          movieQuery={movieQuery}
          onMovieSelected={(movie) => {
            toggleScrollBar(false);
            setSelectedMovie(movie);
            setOpenDialog(true);
          }}
        />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
