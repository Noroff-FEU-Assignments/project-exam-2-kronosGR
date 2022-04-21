import React from 'react';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';

export default function accommodation() {
  return (
    <Layout>
      <Spacer size={30} />
      <h1>Accommodations</h1>

      <Spacer size={60} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);
  return {
    props: {},
  };
}
