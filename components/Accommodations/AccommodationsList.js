import React from 'react';

import styles from '../../styles/AccommodationsList.module.css';
import Accommodations from '../../pages/accommodations';
import { Accommodation } from './Accommodation';

export const AccommodationsList = ({ accommodations }) => {
  return (
    <div className={styles.container}>
      {accommodations.map((item) => (
        <Accommodation key={item.name} item={item} />
      ))}
    </div>
  );
};
