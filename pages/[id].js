import React from 'react';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import { getAccommodationById } from '../BackEnd/getAccommodationById';
import { Error } from '../components/Error';
import { AccommodationImage } from '../components/Accommodations/AccommodationImage';

import styles from '../styles/[id].module.css';
import Image from 'next/image';
import { SpaceAround } from '../components/Layout/SpaceAround';

export default function accommodation({ accommodation, error }) {
  console.log(accommodation);
  return (
    <Layout>
      <Spacer size={30} />
      <h1>{accommodation.name}</h1>
      <div className={styles.container}>
        <AccommodationImage item={accommodation} />
        <p className={styles.description}>{accommodation.description}</p>
        <SpaceAround>
          <div className={styles.info_container}>
            <Image
              src='/icons/bed.svg'
              width={27}
              height={18}
              alt='Total bedrooms'
              className={styles.info}
            />
            <span className={styles.info_text}>{accommodation.bedrooms}</span>
          </div>
          <div className={styles.info_container}>
            <Image
              src='/icons/bath.svg'
              width={27}
              height={18}
              alt='Total bathrooms'
              className={styles.info}
            />
            <span className={styles.info_text}>{accommodation.bathrooms}</span>
          </div>
          <div className={styles.info_container}>
            <Image
              src='/icons/bath.svg'
              width={27}
              height={18}
              alt='Total bathrooms'
              className={styles.info}
            />
            <span className={styles.info_text}>{accommodation.bathrooms}</span>
          </div>
        </SpaceAround>
      </div>
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
