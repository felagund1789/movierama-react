import { Link, useLocation } from "react-router-dom";
import SearchInput from "./searchInput/SearchInput";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Link style={{ textDecoration: "none" }} to="/">
        {pathname.indexOf("/movies/") > -1 ? (
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="44px"
              viewBox="0 -960 960 960"
              width="44px"
              fill="#e8eaed"
              className="back-button"
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
            Movierama
          </h1>
        ) : (
          <h1>🍿Movierama</h1>
        )}
      </Link>
      <SearchInput />
    </>
  );
};

export default Navbar;
