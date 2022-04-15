import Image from 'next/image';
import React from 'react';

import styles from '../../../styles/Hero.module.css';

export default function Hero({ children }) {
  return (
    <div className={styles.hero}>
      <div>{children}</div>
    </div>
  );
}
