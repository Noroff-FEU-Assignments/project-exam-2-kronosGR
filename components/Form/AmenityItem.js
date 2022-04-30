import React from 'react';

import styles from '../../styles/AmenityItem.module.css';
import { PropTypes } from 'prop-types';

export default function AmenityItem({ src, alt, width, height, onToggle }) {
  return (
    <div className={styles.container}>
      <label htmlFor={alt} title={alt}>
        <input
          type='checkbox'
          name={alt}
          id={alt}
          className={styles.checkbox}
          onChange={onToggle}
        />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onChange={onToggle}
          className={styles.image}
        />
      </label>
    </div>
  );
}

AmenityItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onToggle: PropTypes.func,
};
