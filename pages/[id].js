import React from 'react';

export default function accommodation() {
  return <div> {}</div>;
}

export async function getServerSideProps({ params }) {
  console.log(params);
  return {
    props: {},
  };
}
