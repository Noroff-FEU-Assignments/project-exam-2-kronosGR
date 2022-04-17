import React from 'react';
import NavAdmin from './Navigation/NavAdmin';

import styles from '../../styles/LayoutAdmin.module.css';
import Footer from './Footer/Footer';
import Spacer from './Spacer';
import HeroAdmin from './Navigation/HeroAdmin';

export default function LayoutAdmin({ children }) {
  return (
    <>
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
