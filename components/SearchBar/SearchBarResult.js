import React, { useEffect, useState } from 'react';
import { searchAccommodationsByName } from '../../BackEnd/searchAccommodationsByName';

import styles from '../../styles/SearchBarResult.module.css';
import { SearchBarResultItem } from './SearchBarResultItem';
import Spacer from '../Layout/Spacer';
import { Error } from '../Error';

export const SearchBarResult = ({ searchFor }) => {
  const [accommodations, setAccommodations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const search = async () => {
      try {
        const res = await searchAccommodationsByName(searchFor);
        setAccommodations(res.result);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    search();
  }, [searchFor]);
  return (
    <div>
      {searchFor && (
        <div className={styles.container}>
          {accommodations &&
            accommodations.map((item, i) => (
              <SearchBarResultItem key={i} accommodation={item} />
            ))}
          {accommodations && accommodations.length === 0 && (
            <div>
              <Spacer size={100} />
              <span className={styles.nothing}>No accommodations found</span>
            </div>
          )}
          {isLoading && <span className={styles.loading}>Please wait</span>}
          <Error msg='Something went wrong. We apologize' error={error} />
        </div>
      )}
    </div>
  );
};
