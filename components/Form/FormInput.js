import React from 'react';

import styles from '../../styles/FormInput.module.css';

export default function FormInput({ id, title, placeholder, type, register }) {
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
}
