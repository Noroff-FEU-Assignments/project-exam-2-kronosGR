import { useEffect, useState } from 'react';
import { AccommodationsList } from '../components/Accommodations/AccommodationsList';
import { Error } from '../components/Error';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import { FAVORITES, loadFromLocalStorage } from '../utils/localStorage';
import { getAccommodationById } from '../BackEnd/getAccommodationById';
import Loader from '../components/Loader';
import Head from 'next/head';

export default function Favorites() {
  const [accommodations, setAccommodations] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const favorites = loadFromLocalStorage(FAVORITES) || {};
    const ids = [];
    const tmp = [];
    Object.entries(favorites).map((item) => {
      if (item[1] === true) {
        ids.push(item[0]);
      }
    });

    const promises = ids.map((id) => getAccommodationById(id));
    Promise.all(promises)
      .then((values) => {
        values.forEach((item) => {
          tmp.push(item.result);
          if (item.error) throw new Error('Error');
        });
        setAccommodations(tmp);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <Layout>
      <Head>
        <title>Holidaze | Your favorites </title>
      </Head>
      {isLoading && <Loader />}
      <Spacer size={30} />
      <h1>Your favorite</h1>
      {accommodations && accommodations.length > 0 && (
        <AccommodationsList accommodations={accommodations} />
      )}
      {accommodations && accommodations.length === 0 && (
        <div>The is no accommodation in your favorites</div>
      )}
      <Error msg='Something went wrong. We apologize' error={error} />

      <Spacer size={60} />
    </Layout>
  );
}
