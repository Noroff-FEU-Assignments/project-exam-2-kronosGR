import React from 'react';

import styles from '../../styles/FormInput.module.css';

export default function FormInput({
  id,
  title,
  placeholder,
  type,
  width = '100%',
  align = 'left',
  children,
  register,
}) {
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
        style={{ width: width, textAlign: align }}
        {...register}
      />
      {children}
    </div>
  );
}
