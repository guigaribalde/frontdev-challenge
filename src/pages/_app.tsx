import { ChakraProvider } from '@chakra-ui/react';
import { MoviesProvider } from '@context/MoviesContext';
import '@style/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <MoviesProvider>
          <Component {...pageProps} />
        </MoviesProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
