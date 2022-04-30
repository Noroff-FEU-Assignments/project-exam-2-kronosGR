import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from '../../styles/MessageItem.module.css';
import { updateMessageRead } from '../../BackEnd/updateMessageRead';
import { loadFromLocalStorage, USER } from '../../utils/localStorage';
import { PropTypes } from 'prop-types';

export const MessageItem = ({ item }) => {
  const [msg, setMsg] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isRead, setIsRead] = useState(item.read);

  const updateRead = async () => {
    const user = loadFromLocalStorage(USER);
    const res = await updateMessageRead(user.jwt, item.id);
  };

  useEffect(() => {
    if (item.message.length > 150) setMsg(item.message.substr(0, 150) + '...');
    else setMsg(item.message);
  }, []);

  const clickHandler = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setMsg(item.message);
    } else {
      setMsg(item.message.substr(0, 150) + '...');
    }

    if (!item.read) {
      updateRead();
      setIsRead(true);
    }
  };

  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.title_container}>
        {isRead && (
          <Image
            title='Read'
            src='/icons/bell-outline.svg'
            width={30}
            height={30}
            alt={item.name}
          />
        )}

        {!isRead && (
          <Image
            title='Not read'
            src='/icons/bell.svg'
            width={30}
            height={30}
            alt={item.name}
          />
        )}
        <span className={styles.name}>{item.name}</span>
      </div>
      <p className={styles.message}>{msg}</p>
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

MessageItem.propTypes = {
  item: PropTypes.object,
};
