import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from '../../styles/MessageItem.module.css';

export const MessageItem = ({ item }) => {
  const [msg, setMsg] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMsg(item.message.substr(0, 150) + '...');
  }, []);

  const clickHandler = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setMsg(item.message);
    } else {
      setMsg(item.message.substr(0, 150) + '...');
    }

    //TODO on click check if read if not read update to read
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
      <p className={styles.message}>{msg}</p>
      {isVisible && (
        <div className={styles.container_extra}>
          <span className={styles.extra}>{item.email}</span>
          <span className={styles.extra}>{item.phone}</span>
          <span className={styles.extra}>{item.published_at}</span>
        </div>
      )}
    </div>
  );
};
