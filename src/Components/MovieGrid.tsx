import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  // FETCHING THE USEMOVIES HOOK
  const { Movies, error } = useMovies();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={10} padding={20}>
        {Movies.map((Movie) => (
          <MovieCard key={Movie.id} movie={Movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
