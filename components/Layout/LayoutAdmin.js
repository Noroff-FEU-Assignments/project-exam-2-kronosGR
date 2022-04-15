import React from 'react';
import NavAdmin from './Navigation/NavAdmin';
import Script from 'next/script';
import Hero from './Navigation/Hero';

import styles from '../../styles/LayoutAdmin.module.css';
import Footer from './Footer/Footer';

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
        <Hero>
          <NavAdmin />
        </Hero>
      </header>
      <main className={styles.layout}>{children}</main>
      <Footer></Footer>
    </>
  );
}
