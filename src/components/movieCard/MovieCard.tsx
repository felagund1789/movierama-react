import { Movie } from "../../types";
import GenreTag from "../genreTag/GenreTag";
import "./MovieCard.css";

const imageBaseURL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="card">
      <a href="">
        <img
          src={`${imageBaseURL}${movie.poster_path}`}
          alt={movie.title}
          title={movie.title}
          className="movie-poster"
        />
      </a>
      <div className="card-content">
        <a href="" className="movie-title">
          {movie.title}
        </a>
        <div className="year-and-score">
          <h3 className="movie-year">{movie.release_date?.split("-")[0]}</h3>
          {/* <vote-average average="" /> */}
        </div>
        <div className="movie-genres">
          {movie.genre_ids.map((genre) => (
            <GenreTag key={genre}>{genre.toString()}</GenreTag>
          ))}
        </div>
        <div className="movie-overview">{movie.overview}</div>
      </div>
    </div>
  );
};

export default MovieCard;
