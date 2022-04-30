import React from 'react';

import styles from '../styles/Error.module.css';
import { PropTypes } from 'prop-types';

export const Error = ({ error, msg }) => {
  return <>{error && <div className={styles.container}>{msg}</div>}</>;
};

Error.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  msg: PropTypes.string,
};
