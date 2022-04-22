import React from 'react';

export const SpaceBetween = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>{children}</div>
  );
};
