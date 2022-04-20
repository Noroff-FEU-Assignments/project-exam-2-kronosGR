import Image from 'next/image';
import React from 'react';
import { images } from '../../constants/Images';

import styles from '../../styles/Images.module.css';

export default function Images() {
  return (
    <div className={styles.container}>
      {images.map((item) => (
        <Image
          className={styles.image}
          key={item.name}
          src={item.image}
          alt={item.name}
          width={150}
          height={120}
        />
      ))}
    </div>
  );
}
