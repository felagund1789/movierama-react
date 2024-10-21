import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import posterPlaceholder from "../assets/poster-placeholder-dark.png";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <img src={posterPlaceholder} alt="Error" />
      <h1>
        {isRouteErrorResponse(error)
          ? "The movie you are looking for does not exist..."
          : "Oops! Something went wrong..."}
      </h1>
    </div>
  );
};

export default ErrorPage;
