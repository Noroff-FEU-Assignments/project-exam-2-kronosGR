import React from 'react';

import styles from '../../styles/FormAmenities.module.css';
import { amenities } from '../../constants/Amenities';
import AmenityItem from './AmenityItem';

export default function FormAmenities({ handleAmenities }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Amenities</label>
      <div className={styles.amenities}>
        {amenities &&
          amenities.map((item) => (
            <AmenityItem
              key={item.name}
              src={item.icon}
              alt={item.name}
              width={30}
              height={27}
              onToggle={handleAmenities}
            />
          ))}
      </div>
    </div>
  );
}
