import Image from 'next/image';
import React from 'react';
import { API_URL } from '../../constants/Api';

import styles from '../../styles/Accommodation.module.css';
import Button from '../Button';
import Right from '../Layout/Right';
import Spacer from '../Layout/Spacer';

export const Accommodation = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={API_URL + item.images[0].formats.medium.url}
          layout='fill'
          alt={item.name}
        />
      </div>
      <span className={styles.title}>{item.name}</span>
      <p className={styles.description}>{`${item.description.substr(0, 100)}...`}</p>
      <div className={styles.prices}>
        <span className={styles.price}>{`$${item.priceday}/Day`}</span>
        <span className={styles.price}>{`$${item.priceweek}/Week`}</span>
      </div>

      <Right>
        <Button svg='/icons/more.svg' onClick={() => {}} title='More' />
      </Right>
    </div>
  );
};
