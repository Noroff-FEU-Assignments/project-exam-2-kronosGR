import { AccommodationsList } from '../components/Accommodations/AccommodationsList';
import { Error } from '../components/Error';
import Layout from '../components/Layout/Layout';
import { SpaceAround } from '../components/Layout/SpaceAround';
import Spacer from '../components/Layout/Spacer';
import { getMostFavorites } from '../BackEnd/getMostFavorites';
import Head from 'next/head';

export default function MostFavorites({ accommodations, error }) {
  return (
    <Layout>
      <Head>
        <title>Holidaze | Most Favorites</title>
      </Head>
      <SpaceAround size={30} />
      <h1>Most Favorites</h1>
      {accommodations.length > 0 && (
        <AccommodationsList accommodations={accommodations} />
      )}
      <Error msg='Something went wrong. We apologize' error={error} />

      <Spacer size={60} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await getMostFavorites();
  console.log(res.error);

  return {
    props: { accommodations: res.result, error: res.error },
  };
}
