import React from 'react';

import styles from '../styles/Error.module.css';

export const Error = ({ error }) => {
  return <>{error && <div className={styles.container}>{error}</div>}</>;
};
