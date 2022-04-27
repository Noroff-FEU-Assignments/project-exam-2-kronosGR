import Head from 'next/head';
import { UserProvider } from '../Contexts/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <title>{Component.title}</title>
        <meta name='description' content='Explore Bergen. Best Prices' />
        <meta name='keywords' content='bergen, cheap, prices, accommodations, hotels' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' />
      </Head>
      <Component {...pageProps} />;
    </UserProvider>
  );
}

export default MyApp;
