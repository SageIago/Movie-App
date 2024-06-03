import { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import { CanceledError } from "axios";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useMovies = () => {
  // SET THE CONTROLLER OBJECT
  const controller = new AbortController();
  // THIS IS FOR THE MOVIE ARRAY
  const [Movies, setMovies] = useState<Movie[]>([]);

  // THIS IS FOR THE ERROR MESSAGES
  const [error, setError] = useState("");

  // This is the USEEFFECT HOOK
  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>("/movie/popular", { signal: controller.signal })
      .then((response) => setMovies(response.data.results))
      .catch((error) => {
        // TO CHECK THE TYPE OF ERROR
        if (error instanceof CanceledError) return
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { Movies, error };
};

export default useMovies;
