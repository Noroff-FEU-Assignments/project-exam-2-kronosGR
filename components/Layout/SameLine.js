import React from 'react';

import styles from '../../styles/SameLine.module.css';

export default function SameLine({ children }) {
  return <div className={styles.container}>{children}</div>;
}
