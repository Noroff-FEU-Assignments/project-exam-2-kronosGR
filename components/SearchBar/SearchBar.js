import { useRouter } from 'next/router';
import React, { useState } from 'react';

import styles from '../../styles/SearchBar.module.css';
import Button from '../Button';
import SearchInput from './SearchInput';

export default function SearchBar() {
  const [searchFor, setSearchFor] = useState('');
  const router = useRouter();

  const handleOnChange = (data) => {
    setSearchFor(data);
  };

  return (
    <div className={styles.container}>
      <SearchInput
        placeholder='Find by name'
        type='text'
        id='search'
        onChange={handleOnChange}
      />
      <Button
        title='Search'
        width={170}
        svg='/icons/search.svg'
        onClick={() => {
          router.push({ pathname: '/search', query: { searchFor: searchFor } });
        }}
      />
    </div>
  );
}
