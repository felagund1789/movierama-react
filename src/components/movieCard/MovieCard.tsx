import posterPlaceholder from "../../assets/poster-placeholder-dark.png";
import useGenres from "../../hooks/useGenres";
import { Movie } from "../../types";
import ExpandableText from "../ExpandableText";
import GenreTag from "../genreTag/GenreTag";
import VoteAverage from "../voteAverage/VoteAverage";
import "./MovieCard.css";

const imageBaseURL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

interface Props {
  movie: Movie;
  onClick: () => void;
}

const MovieCard = ({ movie, onClick }: Props) => {
  const { data: genres } = useGenres();
  const getGenreName = (genreId?: number): string => {
    const genre = genres?.find((genre) => genre.id === genreId);
    return genre?.name ?? "";
  };

  return (
    <div className="card">
      <div onClick={onClick}>
        <img
          src={
            movie.poster_path && movie.poster_path.trim().length > 0
              ? `${imageBaseURL}${movie.poster_path}`
              : posterPlaceholder
          }
          alt={movie.title}
          title={movie.title}
          className="movie-poster"
        />
      </div>
      <div className="card-content">
        <div onClick={onClick} className="movie-title">
          {movie.title}
        </div>
        <div className="year-and-score">
          <h3 className="movie-year">{movie.release_date?.split("-")[0]}</h3>
          <VoteAverage average={movie.vote_average} />
        </div>
        <div className="movie-genres">
          {movie.genre_ids.map((genreId) => (
            <GenreTag key={genreId}>{getGenreName(genreId)}</GenreTag>
          ))}
        </div>
        <div className="movie-overview">
          <ExpandableText maxCharacters={180}>{movie.overview}</ExpandableText>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
