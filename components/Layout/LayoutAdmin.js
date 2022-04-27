import React from 'react';
import NavAdmin from './Navigation/NavAdmin';

import styles from '../../styles/LayoutAdmin.module.css';
import Footer from './Footer/Footer';
import Spacer from './Spacer';
import HeroAdmin from './Navigation/HeroAdmin';
import Head from 'next/head';

export default function LayoutAdmin({ children }) {
  return (
    <>
      <Head>
        <meta name='description' content='Explore Bergen. Best Prices' />
        <meta name='keywords' content='bergen, cheap, prices, accommodations, hotels' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <header>
        <HeroAdmin>
          <NavAdmin />
        </HeroAdmin>
      </header>
      <main className={styles.layout}>{children}</main>
      <Spacer size='4rem' />
      <Footer />
    </>
  );
}
