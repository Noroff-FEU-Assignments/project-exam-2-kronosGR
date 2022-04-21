import React, { useEffect } from 'react';

import styles from '../../styles/Toast.module.css';

export const Toast = ({ message, isVisible, setIsVisible }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, [isVisible, setIsVisible]);

  return <>{isVisible && <div className={styles.container}>{message}</div>}</>;
};
