import Image from 'next/image';
import React, { useImperativeHandle, useState } from 'react';

import styles from '../../styles/FormImage.module.css';

// eslint-disable-next-line react/display-name
export const FormImage = React.forwardRef(
  ({ id, title, width = '100%', align = 'left', register }, ref) => {
    const [images, setImages] = useState();

    useImperativeHandle(ref, () => ({
      setImages,
    }));

    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        const tmp = [];
        for (const [k, v] of Object.entries(event.target.files)) {
          tmp.push(URL.createObjectURL(v));
        }
        setImages(tmp);
      }
    };

    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={id}>
          {title}
        </label>
        <input
          className={styles.input}
          type='file'
          id={id}
          name={id}
          style={{ width: width, textAlign: align }}
          multiple
          {...register}
          onChange={onImageChange}
        />
        <div className={styles.images}>
          {images &&
            images.map((item) => (
              <img key={item} src={item} alt='uploaded image' className={styles.image} />
            ))}
        </div>
      </div>
    );
  }
);
