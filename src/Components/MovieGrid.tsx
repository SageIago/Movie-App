import { Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";



const MovieGrid = () => {
  // FETCHING THE USEMOVIES HOOK
  const {Movies, error} = useMovies()
 
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
