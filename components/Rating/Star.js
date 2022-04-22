import Image from 'next/image';
import React from 'react';
import { EMPTY, FULL, HALF } from '../../constants/StarState';

import styles from '../../styles/Star.module.css';

export const Star = ({ kind, id, onClick }) => {
  let icon = '';
  switch (kind) {
    case EMPTY:
      icon = '/icons/star-outline.svg';
      break;
    case HALF:
      icon = '/icons/star-half.svg';
      break;
    case FULL:
      icon = '/icons/star.svg';
      break;
    default:
      break;
  }

  return (
    <Image
      src={icon}
      width={28}
      height={27}
      alt={`star${id}`}
      className={styles.star}
      onClick={onClick}
    />
  );
};
