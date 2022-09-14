import { MoviesContext, type MoviesContextProps } from '@context/MoviesContext';
import { useContext } from 'react';

const useMovies = (): MoviesContextProps => {
  return useContext(MoviesContext);
};

export default useMovies;
