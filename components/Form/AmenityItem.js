import Image from 'next/image';
import React from 'react';

import styles from '../../styles/AmenityItem.module.css';

export default function AmenityItem({ src, alt, width, height, onToggle }) {
  return (
    <div className={styles.container}>
      <label htmlFor={alt} title={alt}>
        <input
          type='checkbox'
          name={alt}
          id={alt}
          className={styles.checkbox}
          onChange={onToggle}
        />
        <img src={src} alt={alt} width={width} height={height} className={styles.image} />
      </label>
    </div>
  );
}
