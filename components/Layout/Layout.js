import React from 'react';
import Hero from './Navigation/Hero';

import styles from '../../styles/LayoutAdmin.module.css';
import Footer from './Footer/Footer';
import Spacer from './Spacer';
import Nav from './Navigation/Nav';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Hero>
          <Nav />
        </Hero>
      </header>
      <main className={styles.layout}>{children}</main>
      <Spacer size='4rem' />
      <Footer />
    </>
  );
}
