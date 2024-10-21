import { createBrowserRouter } from "react-router-dom";
import MovieDetailsPage from "./components/movieDetails/MovieDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import MoviesPage from "./pages/MoviesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MoviesPage /> },
      { path: "/movies/:movieId", element: <MovieDetailsPage />},
    ],
  },
]);

export default router;
