import { useEffect, useRef } from "react";
import useMovieDetails from "../../hooks/useMovieDetails";
import { Movie } from "../../types";
import GenreTag from "../genreTag/GenreTag";
import ImdbTag from "../ImdbTag";
import VoteAverage from "../voteAverage/VoteAverage";
import "./MovieDetailsDialog.css";

const imageBaseURL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;
const imageFullBaseURL = import.meta.env.VITE_TMDB_IMAGE_FULL_BASE_URL;

interface Props {
  movie: Movie;
  isOpen: boolean;
  closeDialog: () => void;
}

const convertRuntimeToHoursAndMinutes = (minutes?: number): string => {
  if (!minutes) return "";

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

const MovieDetailsDialog = ({ movie, isOpen, closeDialog }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);
  const { data: movieDetails } = useMovieDetails(movie.id);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={ref} onCancel={closeDialog} className="movie-details-dialog">
      <div
        className="details"
        style={{
          backgroundImage: `url(${imageFullBaseURL}${movie.backdrop_path})`,
        }}
      >
        <button className="close-button" onClick={closeDialog}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
        <div className="details-content">
          <img
            src={`${imageBaseURL}${movie.poster_path}`}
            alt={movie.title}
            title={movie.title}
            className="movie-poster"
          />
          <div className="details-text">
            <h2 className="movie-title">{movie.title}</h2>
            <div className="year-and-score">
              <h3 className="movie-year">
                {movie.release_date?.split("-")[0]}
              </h3>
              •
              <h3 className="duration">
                {convertRuntimeToHoursAndMinutes(movieDetails?.runtime)}
              </h3>
              •
              <ImdbTag imdbId={movieDetails?.imdb_id} />
              •
              <VoteAverage average={movie.vote_average} />
            </div>
            <div className="movie-genres">
              {movieDetails?.genres.map((genre) => (
                <GenreTag key={genre.id}>{genre.name}</GenreTag>
              ))}
            </div>
            <div className="movie-overview">{movie.overview}</div>
            {/* <div className="crew-container"></div>
            <div className="cast-container"></div> */}
          </div>
        </div>
      </div>
      {/* <div className="trailers-container">
        <h2>Trailers</h2>
        <div className="trailers"></div>
      </div>
      <div className="reviews-container">
        <h2>Reviews</h2>
        <div className="reviews"></div>
      </div>
      <div className="similar-movies-container">
        <h2>Similar movies</h2>
        <div className="movies"></div>
      </div> */}
    </dialog>
  );
};

export default MovieDetailsDialog;
