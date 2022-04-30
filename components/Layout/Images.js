import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { images } from '../../constants/Images';

import styles from '../../styles/Images.module.css';
import ImageFull from './ImageFull';

export default function Images() {
  const [imageVisible, setImageVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleClick = (img) => {
    setImageVisible(true);
    setImageUrl(img);
  };

  const closeImage = () => {
    setImageVisible(false);
    setImageUrl('');
  };

  return (
    <div className={styles.container}>
      {images.map((item) => (
        <div className={styles.image_container} key={item.name}>
          <Image
            onClick={() => {
              handleClick(item.image);
            }}
            className={styles.image}
            src={item.image}
            alt={item.name}
            layout='fill'
          />
        </div>
      ))}
      {imageVisible && <ImageFull src={imageUrl} onClick={closeImage} />}
    </div>
  );
}
