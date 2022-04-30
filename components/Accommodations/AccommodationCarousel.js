import Image from 'next/image';
import React, { useState } from 'react';

import styles from '../../styles/AccommodationCarousel.module.css';
import { API_URL } from '../../constants/Api';
import { PropTypes } from 'prop-types';

export const AccommodationCarousel = ({ item }) => {
  const [active, setActive] = useState(0);
  const length = item.images.length;

  const handleClick = (e) => {
    e.preventDefault();
    const type = e.target.dataset.kind;
    if (type === 'next') setActive(active + 1);
    if (type === 'prev') setActive(active - 1);

    if (active < 0) setActive(length - 2);
    if (active > length - 2) setActive(0);
  };

  return (
    <div className={styles.image_container}>
      <div className={styles.carousel}>
        {item.images.map((item, idx) => {
          return (
            <div key={idx}>
              {active === idx && (
                <Image
                  className={styles.image}
                  src={API_URL + item.formats.medium.url}
                  layout='fill'
                  alt={item.name}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.overlay}>
        <a href='#' className={styles.previous} data-kind='prev' onClick={handleClick}>
          <img src='/icons/prev.svg' data-kind='prev' alt='previous' />
        </a>
        <a href='#' className={styles.next} onClick={handleClick}>
          <img src='/icons/next.svg' data-kind='next' alt='next' />
        </a>
      </div>
    </div>
  );
};

AccommodationCarousel.propTypes = {
  item: PropTypes.object.isRequired,
};
