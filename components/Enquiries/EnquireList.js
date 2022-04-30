import React from 'react';

import styles from '../../styles/EnquireList.module.css';
import { EnquireItem } from './EnquireItem';
import { PropTypes } from 'prop-types';

export const EnquireList = ({ enquiries }) => {
  return (
    <div className={styles.container}>
      {enquiries && enquiries.map((item, i) => <EnquireItem item={item} key={i} />)}
      {enquiries && enquiries.length === 0 && <span>No enquiries</span>}
    </div>
  );
};

EnquireList.propTypes = {
  enquiries: PropTypes.array,
};
