import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Find your Home Sweet Home</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
