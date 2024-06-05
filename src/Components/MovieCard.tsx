import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Card
      border="1px"
      borderColor="gray.200"
      borderRadius="6px"
      overflow="hidden"
      maxWidth={400}
      width="100%"
    >
      <Image
        boxSize="400px"
        height="auto"
        objectFit="cover"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardBody>
        <Heading fontSize="md" fontWeight="semibold">
          {movie.title}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
