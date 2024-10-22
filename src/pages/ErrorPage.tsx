import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import posterPlaceholder from "../assets/poster-placeholder-dark.png";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="content">
        <div className="error-page">
          <img src={posterPlaceholder} alt="Error" />
          <h1>
            {isRouteErrorResponse(error)
              ? "The movie you are looking for does not exist..."
              : "Oops! Something went wrong..."}
          </h1>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
