import React from 'react';
import { PropTypes } from 'prop-types';

export default function Right({ children, className }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'right' }} className={className}>
      {children}
    </div>
  );
}

Right.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
