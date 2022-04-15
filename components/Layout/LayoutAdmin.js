import React from 'react';
import NavAdmin from './Navigation/NavAdmin';
import { Head } from 'next/head';
import Script from 'next/script';

export default function LayoutAdmin({ children }) {
  return (
    <>
      <Script
        type='module'
        src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'></Script>
      <Script
        nomodule
        src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'></Script>
      <header>
        <NavAdmin />
      </header>
      <main>{children}</main>;
    </>
  );
}
