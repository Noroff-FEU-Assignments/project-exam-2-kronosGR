import React from 'react';

import styles from '../../styles/Space.module.css';
import { PropTypes } from 'prop-types';
export default function Spacer({ size, color }) {
  return (
    <span
      className={styles.container}
      style={{ height: size + 'px', backgroundColor: color }}></span>
  );
}

Spacer.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Spacer.defaultProps = {
  color: 'white',
};
