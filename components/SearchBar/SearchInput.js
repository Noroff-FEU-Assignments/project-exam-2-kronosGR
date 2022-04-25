import React, { useState } from 'react';

import styles from '../../styles/SearchInput.module.css';
import { SearchBarResult } from './SearchBarResult';

export default function SearchInput({
  id,
  placeholder,
  type,
  width = '100%',
  align = 'left',
}) {
  const [searchFor, setSearchFor] = useState('');

  const handleChange = (e) => {
    setSearchFor(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        style={{ width: width, textAlign: align }}
        onChange={handleChange}
      />
      <SearchBarResult searchFor={searchFor} />
    </div>
  );
}
