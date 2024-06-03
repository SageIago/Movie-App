import { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import { Text } from "@chakra-ui/react";

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

const MovieGrid = () => {
  // THIS IS FOR THE MOVIES ARRAY
  const [Movies, setMovies] = useState<Movie[]>([]);

  // THIS IS FOR THE ERROR MESSAGES
  const [error, setError] = useState([]);

  // This is the USEEFFECT HOOK
  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>("/movie/popular")
      .then((response) => setMovies(response.data.results))
      .catch((error) => setError(error.message));
  }, []);
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {Movies.map(Movie=> <li key={Movie.id}>{Movie.title}</li>)}
    </ul>
    </>
  )
};

export default MovieGrid;
