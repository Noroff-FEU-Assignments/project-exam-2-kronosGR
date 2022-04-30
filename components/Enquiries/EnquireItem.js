import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from '../../styles/EnquireItem.module.css';
import { loadFromLocalStorage, USER } from '../../utils/localStorage';
import { updateEnquireRead } from '../../BackEnd/updateEnquireRead';
import SameLine from '../Layout/SameLine';
import { PropTypes } from 'prop-types';

export const EnquireItem = ({ item }) => {
  const [enq, setEnq] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isRead, setIsRead] = useState(item.read);

  const updateRead = async () => {
    const user = loadFromLocalStorage(USER);
    const res = await updateEnquireRead(user.jwt, item.id);
  };

  useEffect(() => {
    if (item.message.length > 150) setEnq(item.message.substr(0, 150) + '...');
    else setEnq(item.message);
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
            alt={item.fullname}
          />
        )}

        {!isRead && (
          <Image
            title='Not read'
            src='/icons/bell.svg'
            width={30}
            height={30}
            alt={item.fullname}
          />
        )}
        <span className={styles.name}>{item.fullname}</span>
        <span className={styles.phone}>{item.phone}</span>
      </div>
      <p className={styles.message}>{enq}</p>
      {isVisible && (
        <div className={styles.container_extra}>
          <span className={styles.extra}>{item.email}</span>
          <span className={styles.extra}>
            {new Date(item.published_at).toDateString()}
          </span>
        </div>
      )}
      <SameLine>
        <span className={styles.date}>From: {new Date(item.from).toDateString()}</span>
        <span className={styles.date}>To: {new Date(item.to).toDateString()}</span>
      </SameLine>
    </div>
  );
};

EnquireItem.propTypes = {
  item: PropTypes.object.isRequired,
};
