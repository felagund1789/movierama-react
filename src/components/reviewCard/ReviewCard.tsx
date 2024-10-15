import { Review } from "../../types";
import ExpandableText from "../ExpandableText";
import "./ReviewCard.css";

const imageBaseURL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="review-card">
      <div className="author">
        {review.author_details.avatar_path && (
          <img
            src={`${imageBaseURL}${review.author_details.avatar_path}`}
            alt={review.author_details.username}
            title={review.author_details.username}
            className="author-avatar"
          />
        )}
        {review.author_details.name && (
          <h3 className="author-name">{review.author_details.name}</h3>
        )}
        <h4 className="author-username">@{review.author_details.username}</h4>
      </div>
      <div className="review">
        <div className="review-score">
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </div>
        <div className="review-content">
          <a href={review.url} target="_blank">
            {review.author_details.name && review.author_details.name.length > 0
              ? review.author_details.name
              : review.author_details.username}
            's review:
          </a>
          <ExpandableText>{review.content}</ExpandableText>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
