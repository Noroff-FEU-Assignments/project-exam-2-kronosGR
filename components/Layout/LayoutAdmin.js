import React from 'react';
import NavAdmin from './Navigation/NavAdmin';

export default function LayoutAdmin({ children }) {
  return (
    <>
      <header>
        <NavAdmin />
      </header>
      <main>{children}</main>;
    </>
  );
}
