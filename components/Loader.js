import React from 'react';

import styles from '../styles/Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <p className={styles.message}>Please Wait...</p>
    </div>
  );
}
