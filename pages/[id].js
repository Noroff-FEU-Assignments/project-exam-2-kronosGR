import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import { getAccommodationById } from '../BackEnd/getAccommodationById';
import { Error } from '../components/Error';

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
import { increaseVisits } from '../BackEnd/increaseVisits';
import { updateFavorites } from '../BackEnd/updateFavorites';
import { AccommodationCarousel } from '../components/Accommodations/AccommodationCarousel';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function accommodation({ accommodation, error }) {
  const [isFavorite, setIsFavorite] = useState(checkIfIsFavorite(accommodation.id));
  const [errorLocal, setErrorLocal] = useState(false);
  const router = useRouter();

  const updateFavorite = async () => {
    const favorites = isFavorite
      ? Number(accommodation.favorites) - 1
      : Number(accommodation.favorites) + 1;

    try {
      const res = await updateFavorites(accommodation.id, favorites);
      router.push({ pathname: router.asPath }, undefined, { scroll: false });
    } catch (err) {
      console.log(err);
      setErrorLocal(err);
    }
  };

  useEffect(() => {
    const update = async () => {
      try {
        const res = await increaseVisits(
          accommodation.id,
          parseInt(accommodation.visits) + 1
        );
      } catch (err) {
        console.log(err);
        setErrorLocal(err);
      }
    };
    update();
  }, []);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    updateFavorite();
    toggleFavorites(accommodation.id);
    setIsFavorite(!isFavorite);
  };

  return (
    <Layout>
      <Head>
        <title>Holidaze | {accommodation.name}</title>
      </Head>
      <Spacer size={30} />
      <h1>{accommodation.name}</h1>
      <Rating
        votes={accommodation.votes}
        votesTotal={parseInt(accommodation.votestotal)}
        aid={accommodation.id}
      />
      <Spacer size={10} />
      <div className={styles.container}>
        <AccommodationCarousel item={accommodation} />
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
            onClick={() => {
              router.push({
                pathname: '/enquire',
                query: { aid: accommodation.id },
              });
            }}
            svg='/icons/question-mark.svg'
            title='Enquire'
          />
        </Right>
      </div>
      <Error msg='Something went wrong. We apologize' error={error} />
      <Error msg='Something went wrong. We apologize' error={errorLocal} />
      <Spacer size={60} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await getAccommodationById(params.id);
  console.log(res.result.name);

  return {
    props: { accommodation: res.result, error: res.error },
  };
}
