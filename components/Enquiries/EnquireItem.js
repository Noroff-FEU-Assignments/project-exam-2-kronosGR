import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from '../../styles/EnquireItem.module.css';
import { loadFromLocalStorage, USER } from '../../utils/localStorage';
import { updateEnquireRead } from '../../BackEnd/updateEnquireRead';

export const EnquireItem = ({ item }) => {
  const [enq, setEnq] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const updateRead = async () => {
    const user = loadFromLocalStorage(USER);
    const res = await updateEnquireRead(user.jwt, item.id);
  };

  useEffect(() => {
    setEnq(item.message.substr(0, 150) + '...');
  }, []);

  const clickHandler = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setEnq(item.message);
    } else {
      setEnq(item.message.substr(0, 150) + '...');
    }

    if (!item.read) {
      updateRead();
    }
  };

  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.title_container}>
        {item.read && (
          <Image src='/icons/bell-outline.svg' width={30} height={30} alt={item.name} />
        )}

        {!item.read && (
          <Image src='/icons/bell.svg' width={30} height={30} alt={item.name} />
        )}
        <span className={styles.name}>{item.name}</span>
      </div>
      <p className={styles.message}>{enq}</p>
      {isVisible && (
        <div className={styles.container_extra}>
          <span className={styles.extra}>{item.email}</span>
          <span className={styles.extra}>{item.phone}</span>
          <span className={styles.extra}>
            {new Date(item.published_at).toDateString()}
          </span>
        </div>
      )}
    </div>
  );
};
