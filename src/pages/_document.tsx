import { Head, Html, Main, NextScript } from 'next/document';

function Document(): React.ReactNode {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://image.tmdb.org" />
        <link rel="preconnect" href="https://api.themoviedb.org" />
        <title>Frontend Challenge</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
