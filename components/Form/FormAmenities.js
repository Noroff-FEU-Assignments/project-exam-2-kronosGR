import React, { useState } from 'react';

import styles from '../../styles/FormAmenities.module.css';
import { amenities } from '../../constants/Amenities';
import AmenityItem from './AmenityItem';

export default function FormAmenities({ register }) {
  const [amenities, setAmenities] = useState([]);

  const clickHandler = () => {};

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
              onToggle={clickHandler}
            />
          ))}
      </div>
    </div>
  );
}
