import Image from 'next/image';
import React from 'react';

import styles from '../../styles/ImageFull.module.css';

export default function ImageFull({ src, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <Image src={src} layout='fill' alt='maximized image' className={styles.image} />
    </div>
  );
}
