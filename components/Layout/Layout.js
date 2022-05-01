import React from 'react';
import Hero from './Navigation/Hero';

import styles from '../../styles/LayoutAdmin.module.css';
import Footer from './Footer/Footer';
import Spacer from './Spacer';
import Nav from './Navigation/Nav';
import { PropTypes } from 'prop-types';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Hero>
          <Nav />
        </Hero>
      </header>
      <div className={styles.wrapper}>
        <main className={styles.layout}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
