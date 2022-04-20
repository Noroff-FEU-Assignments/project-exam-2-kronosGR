import React from 'react';

import styles from '../../styles/SearchInput.module.css';

export default function SearchInput({
  id,
  placeholder,
  type,
  width = '100%',
  align = 'left',
}) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        style={{ width: width, textAlign: align }}
      />
    </div>
  );
}
