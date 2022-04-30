import Image from 'next/image';
import React from 'react';

import styles from '../../styles/AccommodationImage.module.css';
import { API_URL } from '../../constants/Api';
import { PropTypes } from 'prop-types';

export const AccommodationImage = ({ item }) => {
  return (
    <div className={styles.image_container}>
      <Image
        className={styles.image}
        src={API_URL + item.images[0].formats.medium.url}
        layout='fill'
        alt={item.name}
      />
    </div>
  );
};

AccommodationImage.propTypes = {
  item: PropTypes.object.isRequired,
};
