import Head from 'next/head';
import Image from 'next/image';
import { AccommodationsList } from '../components/Accommodations/AccommodationsList';
import { Error } from '../components/Error';
import Layout from '../components/Layout/Layout';
import { SpaceAround } from '../components/Layout/SpaceAround';
import Spacer from '../components/Layout/Spacer';
import styles from '../styles/Home.module.css';
import { getMostFavorites } from '../BackEnd/getMostFavorites';

export default function MostFavorites({ accommodations, error }) {
  return (
    <Layout>
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
