import React from 'react';

import styles from '../../styles/EnquireList.module.css';
import { EnquireItem } from './EnquireItem';

export const EnquireList = ({ enquiries, onReload }) => {
  return (
    <div className={styles.container}>
      {enquiries && enquiries.map((item, i) => <EnquireItem item={item} key={i} />)}
    </div>
  );
};
