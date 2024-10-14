import { useEffect, useState } from "react";
import genreService from "../services/genreService";
import { Genre } from "../types";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    genreService
      .fetchGenres()
      .then((response) => {
        setGenres(response.genres);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setGenres([]);
        setIsLoading(false);
        setError((error as Error).message);
      });

    return () => controller.abort();
  }, []);

  return { genres, isLoading, error };
};

export default useGenres;
