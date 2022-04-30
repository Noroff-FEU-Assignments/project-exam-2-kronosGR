import React from 'react';

import styles from '../../styles/SameLine.module.css';
import { PropTypes } from 'prop-types';

export default function SameLine({ children }) {
  return <div className={styles.container}>{children}</div>;
}

SameLine.propTypes = {
  children: PropTypes.node,
};
