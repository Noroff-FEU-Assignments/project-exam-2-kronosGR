import React from 'react';

import styles from '../../styles/SearchBar.module.css';
import Button from '../Button';
import SearchInput from './SearchInput';

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <SearchInput placeholder='Find by name' type='text' id='search' />
      <Button
        title='Search'
        width={170}
        svg='/icons/search.svg'
        onClick={() => {
          // TODO search for accommodations
          console.log('clicked');
        }}
      />
    </div>
  );
}
