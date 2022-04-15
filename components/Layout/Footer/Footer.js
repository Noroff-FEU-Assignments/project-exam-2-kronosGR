import React from 'react';

import styles from '../../../styles/Footer.module.css';

export default function Footer({ children }) {
  return <footer className={styles.container}>{children}</footer>;
}
