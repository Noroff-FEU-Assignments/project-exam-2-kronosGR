import React, { useState } from 'react';

import styles from '../../styles/SearchInput.module.css';
import { SearchBarResult } from './SearchBarResult';
import { PropTypes } from 'prop-types';

export default function SearchInput({ id, placeholder, type, width, align, onChange }) {
  const [searchFor, setSearchFor] = useState('');

  const handleChange = (e) => {
    setSearchFor(e.target.value);
    onChange(e.target.value);
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

SearchInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  align: PropTypes.string,
  onChange: PropTypes.func,
};

SearchInput.defaultProps = {
  width: '100%',
  align: 'left',
};
