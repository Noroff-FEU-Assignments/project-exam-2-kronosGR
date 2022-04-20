import Image from 'next/image';
import React from 'react';
import { images } from '../../constants/Images';

import styles from '../../styles/Images.module.css';

export default function Images() {
  return (
    <div className={styles.container}>
      {images.map((item) => (
        <div className={styles.image_container} key={item.name}>
          <Image
            className={styles.image}
            src={item.image}
            alt={item.name}
            layout='fill'
          />
        </div>
      ))}
    </div>
  );
}
