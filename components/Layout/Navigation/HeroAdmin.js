import Image from 'next/image';
import React from 'react';

import styles from '../../../styles/HeroAdmin.module.css';

export default function HeroAdmin({ children }) {
  return (
    <div className={styles.hero}>
      <div>{children}</div>
    </div>
  );
}
