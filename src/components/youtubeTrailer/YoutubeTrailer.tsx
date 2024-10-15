import { Trailer } from "../../types";
import "./YoutubeTrailer.css";

const youtubeBaseURL = import.meta.env.VITE_YOUTUBE_BASE_URL;

interface Props {
  trailer: Trailer;
}

const YoutubeTrailer = ({ trailer }: Props) => {
  return (
    <div className="trailer">
      <iframe
        className="video"
        src={`${youtubeBaseURL}${trailer.key}`}
      ></iframe>
      <h3 className="trailer-title">{trailer.name}</h3>
    </div>
  );
};

export default YoutubeTrailer;
