import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { API_URL } from '../../constants/Api';

import styles from '../../styles/SearchBarResultItem.module.css';
import { PropTypes } from 'prop-types';

export const SearchBarResultItem = ({ accommodation }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${accommodation.id}`);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.image_wrapper}>
        <Image
          className={styles.image}
          src={API_URL + accommodation.images[0].formats.medium.url}
          layout='fill'
          objectFit='cover'
          alt={accommodation.name}
        />
      </div>
      <span className={styles.title}>{accommodation.name}</span>
    </div>
  );
};

SearchBarResultItem.propTypes = {
  accommodation: PropTypes.object,
};
