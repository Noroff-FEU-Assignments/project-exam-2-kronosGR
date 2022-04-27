import { AccommodationsList } from '../components/Accommodations/AccommodationsList';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import { getAccommodations } from '../BackEnd/getAccommodations';
import { Error } from '../components/Error';
import { searchAccommodationsByName } from '../BackEnd/searchAccommodationsByName';
import Head from 'next/head';

export default function Search({ accommodations, error, searchFor }) {
  return (
    <Layout>
      <Head>
        <title>Holidaze | Search for {searchFor}</title>
      </Head>
      <Spacer size={30} />
      <h1>{`${searchFor}(${accommodations.length})`}</h1>
      {accommodations.length > 0 && (
        <AccommodationsList accommodations={accommodations} />
      )}
      <Error msg='Something went wrong. We apologize' error={error} />

      <Spacer size={60} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const searchFor = context.query.searchFor;
  const res = await searchAccommodationsByName(searchFor);
  console.log(res.result);
  console.log(res.error);
  return {
    props: {
      accommodations: res.result,
      error: res.error,
      searchFor,
    },
  };
}
