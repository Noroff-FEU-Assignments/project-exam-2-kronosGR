import React from 'react';

export const SpaceAround = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>{children}</div>
  );
};
