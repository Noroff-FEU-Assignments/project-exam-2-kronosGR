import Image from 'next/image';
import React from 'react';

import styles from '../../styles/AccommodationCarousel.module.css';
import { API_URL } from '../../constants/Api';

export const AccommodationCarousel = ({ item }) => {
  console.log(item.images);
  return (
    <div className={styles.image_container}>
      <div className={styles.carousel}>
        {item.images.map((item, idx) => {
          return (
            <Image
              key={idx}
              className={styles.image}
              src={API_URL + item.formats.medium.url}
              layout='fill'
              alt={item.name}
            />
          );
        })}
      </div>
      <div className={styles.overlay}>
        <a href='' className={styles.previous}>
          <img src='/icons/prev.svg' />
        </a>
        <a href='' className={styles.next}>
          <img src='/icons/next.svg' />
        </a>
      </div>
    </div>
  );
};
