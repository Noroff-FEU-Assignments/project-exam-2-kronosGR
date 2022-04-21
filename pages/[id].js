import React from 'react';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import { getAccommodationById } from '../BackEnd/getAccommodationById';
import { Error } from '../components/Error';

export default function accommodation({ accommodation, error }) {
  return (
    <Layout>
      <Spacer size={30} />
      <h1>{accommodation.name}</h1>

      <Error msg='Something went wrong. We apologize' error={error} />
      <Spacer size={60} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await getAccommodationById(params.id);

  return {
    props: { accommodation: res.result, error: res.error },
  };
}
