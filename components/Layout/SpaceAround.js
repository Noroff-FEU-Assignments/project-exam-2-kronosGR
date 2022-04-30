import React from 'react';
import { PropTypes } from 'prop-types';

export const SpaceAround = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>{children}</div>
  );
};

SpaceAround.propTypes = {
  children: PropTypes.node,
};
