import { type Movie } from '@interfaces/movie';
import api from '@lib/api';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import React, { createContext, useState } from 'react';

export type Range = 'day' | 'week';
export enum RangeEnum {
  day = 'dia',
  week = 'semana',
}
interface MoviesRequest {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MoviesContextProps {
  movies: Movie[];
  loadMore: () => void;
  filterByRange: (range: Range) => void;
  range: Range;
  moviesQuery: UseQueryResult<MoviesRequest>;
  hasMore: boolean;
}

export const MoviesContext = createContext({} as MoviesContextProps);

export function MoviesProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState<Range>('week');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const hasMore = page < totalPages;

  async function fetchMovies() {
    const { data }: { data: MoviesRequest } = await api.get(
      `trending/movie/${range}?page=${page}&api_key=90c387e57fd6847787d985e4dbebbac0`
    );
    if (data.total_pages !== totalPages) setTotalPages(data.total_pages);
    return data;
  }

  const moviesQuery = useQuery(['movies', range, page], fetchMovies, {
    onSuccess: (data) => {
      setMovies((oldMovies) => {
        return [...oldMovies, ...data.results];
      });
    },
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    keepPreviousData: true,
  });

  function filterByRange(innerRange: Range) {
    if (innerRange !== range) {
      setMovies([]);
      setRange(innerRange);
      setPage(1);
    }
  }

  function loadMore() {
    if (hasMore) {
      setPage(page + 1);
    }
  }

  return (
    <MoviesContext.Provider
      // eslint-disable-next-line
      value={{ movies, loadMore, filterByRange, moviesQuery, range, hasMore }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
