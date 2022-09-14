import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { type Movie } from '@interfaces/movie';
import { FaStar } from 'react-icons/fa';

function MovieCard({ movie }: { movie: Movie }): JSX.Element {
  return (
    <Box p="2">
      <Flex
        border="1px solid #aaa"
        w="fit-content"
        h="fit-content"
        borderRadius="md"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
          w="200px"
          h="300px"
          loading="lazy"
          objectFit="cover"
        />
        <Flex
          align="center"
          gap="1"
          py="1"
          px="3"
          bgColor="blackAlpha.800"
          color="gold"
          fontSize="sm"
          position="absolute"
          bottom="0"
          right="0"
          borderTopLeftRadius="md"
        >
          <Icon as={FaStar} />
          <Text>{movie.vote_average.toFixed(1)}</Text>
        </Flex>
      </Flex>
      <Flex direction="column" mt="2" maxW="200px">
        <Text fontWeight="bold" color="white">
          {movie.title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {Intl.DateTimeFormat('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(new Date(movie.release_date))}
        </Text>
      </Flex>
    </Box>
  );
}

export default MovieCard;
