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
            closeDialog={() => setOpenDialog(false)}
            onMovieSelected={(movie) => setSelectedMovie(movie)}
          />
        )}
        <MovieGrid
          movieQuery={movieQuery}
          onMovieSelected={(movie) => {
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
