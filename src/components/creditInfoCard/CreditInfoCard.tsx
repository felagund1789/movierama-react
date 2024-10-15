import { Cast, Crew } from "../../types";
import "./CreditInfoCard.css";

const imageBaseURL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

interface Props {
  credit: Crew | Cast;
}

const CreditInfoCard = ({ credit }: Props) => {
  return (
    <div className="credit-info-card">
      {credit.profile_path ? (
        <img
          src={`${imageBaseURL}${credit.profile_path}`}
          alt={credit.name}
          title={credit.name}
          className="profile-photo"
        />
      ) : (
        <div className="profile-photo"></div>
      )}
      <h3 className="credit-name" title={credit.name}>
        {credit.name}
      </h3>
      {"job" in credit && (
        <h4 className="credit-role" title={credit.job}>
          {credit.job}
        </h4>
      )}
      {"character" in credit && (
        <h4 className="credit-character" title={credit.character}>
          {credit.character}
        </h4>
      )}
    </div>
  );
};

export default CreditInfoCard;
