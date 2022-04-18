import React from 'react';

import styles from '../../styles/FormTextArea.module.css';

export default function FormTextArea({ id, title, placeholder, rows, register }) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>
      <textarea
        className={styles.input}
        id={id}
        name={id}
        placeholder={placeholder}
        rows={rows}
        {...register}></textarea>
    </div>
  );
}
