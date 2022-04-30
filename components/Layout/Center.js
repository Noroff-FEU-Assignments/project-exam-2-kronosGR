import React from 'react';
import { PropTypes } from 'prop-types';

export default function Center({ children }) {
  return <div style={{ display: 'flex', justifyContent: 'center' }}>{children}</div>;
}

Center.propTypes = {
  children: PropTypes.node,
};
