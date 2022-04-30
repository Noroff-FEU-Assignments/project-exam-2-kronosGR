import Image from 'next/image';
import React from 'react';

import styles from '../../../styles/Hero.module.css';
import { PropTypes } from 'prop-types';

export default function Hero({ children }) {
  return (
    <div className={styles.hero}>
      <div>{children}</div>
    </div>
  );
}

Hero.propTypes = {
  children: PropTypes.node,
};
