import React from 'react';

import styles from '../../styles/FormInput.module.css';

export default function FormInput({ id, title, placeholder, type }) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>
      <input className={styles.input} type={type} id={id} placeholder={placeholder} />
    </div>
  );
}
