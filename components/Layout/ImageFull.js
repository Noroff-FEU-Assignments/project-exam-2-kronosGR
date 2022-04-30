import Image from 'next/image';
import React from 'react';

import styles from '../../styles/ImageFull.module.css';
import { PropTypes } from 'prop-types';

export default function ImageFull({ src, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <Image src={src} layout='fill' alt='maximized image' className={styles.image} />
    </div>
  );
}

ImageFull.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func,
};
