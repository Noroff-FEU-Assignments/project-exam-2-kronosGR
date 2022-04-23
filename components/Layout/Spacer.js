import React from 'react';

import styles from '../../styles/Space.module.css';
export default function Spacer({ size }) {
  return (
    <span
      className={styles.container}
      style={{ height: size + 'px', backgroundColor: 'white' }}></span>
  );
}
