import Image from 'next/image';
import React, { useState } from 'react';

import styles from '../../styles/MessageItem.module.css';

export const MessageItem = ({ item }) => {
  const [msg, setMsg] = useState('');

  console.log(item);
  return (
    <div className={styles.container}>
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
    </div>
  );
};
