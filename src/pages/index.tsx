import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react';
import Header from '@components/Header';
import MovieCard from '@components/MovieCard';
import useMovies from '@hooks/useMovies';

function Home() {
  const { movies, loadMore, moviesQuery, filterByRange, range, hasMore } =
    useMovies();
  return (
    <Flex w="100%" h="100%" minH="100vh" bgColor="black" direction="column">
      <Header range={range} filterByRange={filterByRange} />
      <Grid
        templateColumns="repeat(12, 1fr)"
        margin="auto"
        w="full"
        justifyItems="center"
        maxW="1000px"
      >
        {movies.map((movie) => {
          return (
            <GridItem
              key={movie.id}
              colSpan={{ base: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
            >
              <MovieCard movie={movie} />
            </GridItem>
          );
        })}
      </Grid>

      {hasMore && (
        <Box maxW="1000px" w="full" margin="auto" my="10" p="2">
          <Button
            onClick={loadMore}
            w="full"
            isLoading={moviesQuery.isLoading}
            colorScheme="red"
          >
            Carregar mais
          </Button>
        </Box>
      )}
    </Flex>
  );
}

export default Home;
