import { useRouter } from 'next/router';
import React from 'react';

import styles from '../../styles/Accommodation.module.css';
import Button from '../Button';
import Right from '../Layout/Right';
import { AccommodationImage } from './AccommodationImage';

export const Accommodation = ({ item }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <AccommodationImage item={item} />
      <span className={styles.title}>{item.name}</span>
      <p className={styles.description}>{`${item.description.substr(0, 100)}...`}</p>
      <div className={styles.prices}>
        <span className={styles.price}>{`$${item.priceday}/Day`}</span>
        <span className={styles.price}>{`$${item.priceweek}/Week`}</span>
      </div>

      <Right className={styles.button}>
        <Button
          svg='/icons/more.svg'
          onClick={() => {
            router.push(`/${item.id}`);
          }}
          title='More'
        />
      </Right>
    </div>
  );
};
