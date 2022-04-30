import React from 'react';

import styles from '../../styles/AccommodationsList.module.css';
import { Accommodation } from './Accommodation';
import { PropTypes } from 'prop-types';

export const AccommodationsList = ({ accommodations }) => {
  return (
    <div className={styles.container}>
      {accommodations.map((item) => (
        <Accommodation key={item.name} item={item} />
      ))}
    </div>
  );
};

AccommodationsList.propTypes = {
  accommodations: PropTypes.array.isRequired,
};
