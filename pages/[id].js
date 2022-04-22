import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import { getAccommodationById } from '../BackEnd/getAccommodationById';
import { Error } from '../components/Error';
import { AccommodationImage } from '../components/Accommodations/AccommodationImage';

import styles from '../styles/[id].module.css';
import Image from 'next/image';
import { SpaceAround } from '../components/Layout/SpaceAround';
import { Favorite } from '../components/Layout/Favorite';
import { ShowAmenities } from '../components/ShowAmmenities';
import { SpaceBetween } from '../components/Layout/SpaceBetween';
import Button from '../components/Button';
import Right from '../components/Layout/Right';
import { checkIfIsFavorite, toggleFavorites } from '../utils/localStorage';
import { Rating } from '../components/Rating/Rating';

export default function accommodation({ accommodation, error }) {
  const [isFavorite, setIsFavorite] = useState(checkIfIsFavorite(accommodation.id));

  //TODO add to visits

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    toggleFavorites(accommodation.id);

    //TODO add to favorites strapi (increase or decrease depending the status)
  };

  console.log(accommodation);

  return (
    <Layout>
      <Spacer size={30} />
      <h1>{accommodation.name}</h1>
      <Rating votes={accommodation.votes} votesTotal={accommodation.votesTotal} />
      <Spacer size={10} />
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
          <Favorite isFavorite={isFavorite} click={handleFavoriteClick} />
        </SpaceAround>

        <ShowAmenities amenities={accommodation.amenities} />
        <SpaceBetween>
          <div className={styles.price}>{`$${accommodation.priceday}/Day`}</div>
          <div className={styles.price}>{`$${accommodation.priceweek}/Week`}</div>
        </SpaceBetween>
        <Spacer size={20} />
        <Right className={styles.button}>
          <Button
            width={150}
            onClick={() => {}}
            svg='/icons/question-mark.svg'
            title='Enquire'
          />
        </Right>
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
