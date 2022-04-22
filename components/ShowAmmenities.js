import Image from 'next/image';
import React from 'react';
import { getAmenityByName } from '../constants/Amenities';

import styles from '../styles/ShowAmenities.module.css';

export const ShowAmenities = ({ amenities }) => {
  return (
    <div className={styles.container}>
      {Object.entries(JSON.parse(amenities)).map((item) => {
        if (item[1]) {
          let amTmp = getAmenityByName(item[0]);
          return (
            <Image
              className={styles.image}
              src={amTmp.icon}
              alt={amTmp.name}
              width={30}
              height={30}
              key={amTmp.name}
            />
          );
        }
      })}
    </div>
  );
};
