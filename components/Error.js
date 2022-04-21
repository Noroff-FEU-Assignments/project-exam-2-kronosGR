import React from 'react';

import styles from '../styles/Error.module.css';

export const Error = ({ error, msg }) => {
  return <>{error && <div className={styles.container}>{msg}</div>}</>;
};
