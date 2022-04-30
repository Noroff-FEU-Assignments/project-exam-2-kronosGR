import React, { useEffect } from 'react';

import styles from '../../styles/Toast.module.css';
import { PropTypes } from 'prop-types';

export const Toast = ({ message, isVisible, setIsVisible }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, [isVisible, setIsVisible]);

  return <>{isVisible && <div className={styles.container}>{message}</div>}</>;
};

Toast.propTypes = {
  message: PropTypes.string,
  isVisible: PropTypes.bool,
  setIsVisible: PropTypes.func,
};
