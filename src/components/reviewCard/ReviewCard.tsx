import { Review } from "../../types";
import "./ReviewCard.css";

const imageBaseURL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  console.log(review.content);
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
          {[0, 1, 2, 3, 4].map((index) => (
            <span key={index} className="star">
              {review.author_details.rating >= index * 2 + 2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#f4b136"
                >
                  <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              ) : review.author_details.rating >= index * 2 + 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#f4b136"
                >
                  <path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#f4b136"
                >
                  <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                </svg>
              )}
            </span>
          ))}
        </div>
        <div className="review-content">
          <a href={review.url} target="_blank">
            {review.author}'s review:
          </a>
          {review.content
            .split("\n")
            .map((text) =>
              text && text.trim().length > 0 ? <p>{text}</p> : <br />
            )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
