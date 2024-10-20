import { useEffect, useRef, useState } from "react";
import posterPlaceholder from "../../assets/poster-placeholder-dark.png";
import useMovieCast from "../../hooks/useMovieCast";
import useMovieCrew from "../../hooks/useMovieCrew";
import useMovieDetails from "../../hooks/useMovieDetails";
import useMovieReviews from "../../hooks/useMovieReviews";
import useMovieTrailers from "../../hooks/useMovieTrailers";
import useSimilarMovies from "../../hooks/useSimilarMovies";
import { Movie } from "../../types";
import CreditInfoCard from "../creditInfoCard/CreditInfoCard";
import GenreTag from "../GenreTag";
import ImdbTag from "../ImdbTag";
import MovieCard from "../movieCard/MovieCard";
import ReviewCard from "../reviewCard/ReviewCard";
import VoteAverage from "../voteAverage/VoteAverage";
import YoutubeTrailer from "../youtubeTrailer/YoutubeTrailer";
import "./MovieDetailsDialog.css";

const imageBaseURL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;
const imageFullBaseURL = import.meta.env.VITE_TMDB_IMAGE_FULL_BASE_URL;

interface Props {
  movieId: number;
  isOpen: boolean;
  closeDialog: () => void;
  onMovieSelected: (movie: Movie) => void;
}

const convertRuntimeToHoursAndMinutes = (minutes?: number): string => {
  if (!minutes) return "";

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

const MovieDetailsDialog = ({
  movieId,
  isOpen,
  closeDialog,
  onMovieSelected,
}: Props) => {
  const ref = useRef<HTMLDialogElement>(null);
  const { data: movieDetails, isLoading: movieDetailsLoading } = useMovieDetails(movieId);
  const { data: castMembers } = useMovieCast(movieId);
  const { data: crewMembers } = useMovieCrew(movieId);
  const { data: movieTrailers } = useMovieTrailers(movieId);
  const { data: movieReviews } = useMovieReviews(movieId);
  const { data: similarMovies } = useSimilarMovies(movieId);

  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
      setIsClosing(false);
    } else {
      setIsClosing(true);
      setTimeout(() => {
        ref.current?.close();
        setIsClosing(false);
      }, 300);
    }
  }, [isOpen]);

  return (
    <dialog ref={ref} onCancel={closeDialog} className="movie-details-dialog">
      <div
        className="details"
        style={{
          backgroundImage: `url(${imageFullBaseURL}${movieDetails?.backdrop_path})`,
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
            src={
              movieDetailsLoading || !movieDetails?.poster_path || movieDetails?.poster_path.trim().length === 0
                ? posterPlaceholder
                : `${imageBaseURL}${movieDetails?.poster_path}`
            }
            alt={movieDetails?.title}
            title={movieDetails?.title}
            className="movie-poster"
          />
          <div className="details-text">
            <h2 className="movie-title">{movieDetails?.title ?? ""}</h2>
            <div className="year-and-score">
              <h3 className="movie-year">
                {movieDetails?.release_date?.split("-")[0]}
              </h3>
              •
              <h3 className="duration">
                {convertRuntimeToHoursAndMinutes(movieDetails?.runtime ?? 0)}
              </h3>
              •
              <ImdbTag imdbId={movieDetails?.imdb_id} />
              •
              <VoteAverage average={movieDetails?.vote_average ?? 0} />
            </div>
            <div className="movie-genres">
              {movieDetails?.genres.map((genre) => (
                <GenreTag key={genre.id}>{genre.name}</GenreTag>
              ))}
            </div>
            <div className="movie-overview">{movieDetails?.overview ?? ""}</div>
            <div className="crew-container">
              {crewMembers
                ?.filter(
                  (member) =>
                    member.job === "Director" ||
                    member.job === "Writer" ||
                    member.job === "Screenplay"
                )
                .map((crewMember) => (
                  <CreditInfoCard
                    key={crewMember.credit_id}
                    credit={crewMember}
                  />
                ))}
            </div>
            <div className="cast-container">
              {castMembers?.slice(0, 8).map((actor) => (
                <CreditInfoCard key={actor.credit_id} credit={actor} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {!isClosing && movieTrailers && movieTrailers.length > 0 && (
        <div className="trailers-container">
          <h2>Trailers</h2>
          <div className="trailers">
            {movieTrailers.slice(0, 4).map((trailer) => (
              <YoutubeTrailer key={trailer.id} trailer={trailer} />
            ))}
          </div>
        </div>
      )}
      {movieReviews && movieReviews.length > 0 && (
        <div className="reviews-container">
          <h2>Reviews</h2>
          <div className="reviews">
            {movieReviews.slice(0, 2).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      )}
      {similarMovies && similarMovies.length > 0 && (
        <div className="similar-movies-container">
          <h2>Similar movies</h2>
          <div className="movies">
            {similarMovies.slice(0, 4).map((movie) => (
              <MovieCard
                onClick={() => onMovieSelected(movie)}
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </div>
      )}
    </dialog>
  );
};

export default MovieDetailsDialog;
