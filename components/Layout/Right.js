import React from 'react';

export default function Right({ children, className }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'right' }} className={className}>
      {children}
    </div>
  );
}
