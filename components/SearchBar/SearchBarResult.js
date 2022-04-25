import React, { useEffect, useState } from 'react';
import { searchAccommodationsByName } from '../../BackEnd/searchAccommodationsByName';

import styles from '../../styles/SearchBarResult.module.css';
import { SearchBarResultItem } from './SearchBarResultItem';

export const SearchBarResult = ({ searchFor }) => {
  const [accommodations, setAccommodations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const search = async () => {
      try {
        const res = await searchAccommodationsByName(searchFor);
        console.log(res.result.length);
        setAccommodations(res.result);
      } catch (err) {}
    };
    search();
  }, [searchFor]);
  return (
    <div className={styles.container}>
      {accommodations &&
        accommodations.map((item, i) => (
          <SearchBarResultItem key={i} accommodation={item} />
        ))}
    </div>
  );
};
