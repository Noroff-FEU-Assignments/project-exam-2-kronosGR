import React, { useEffect } from 'react';
import { searchAccommodationsByName } from '../../BackEnd/searchAccommodationsByName';

import styles from '../../styles/SearchBarResult.module.css';

export const SearchBarResult = ({ searchFor }) => {
  useEffect(() => {
    const search = async () => {
      try {
        const res = searchAccommodationsByName(searchFor);
        console.log(res.length);
      } catch (err) {}
    };
    search();
  }, [searchFor]);
  return <div className={styles.container}>{searchFor}</div>;
};
