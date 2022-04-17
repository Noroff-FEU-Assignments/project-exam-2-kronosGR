import React from 'react';

import styles from '../../styles/FormInput.module.css';

export default function FormInput({ id, title, placeholder, type, value, setValue }) {
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>
      <input
        value={value}
        onChange={handleInputChange}
        className={styles.input}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
