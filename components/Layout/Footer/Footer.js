import React from 'react';

import styles from '../../../styles/Footer.module.css';
import FooterLink from './FooterLink';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <FooterLink
          href='#'
          icon='/icons/facebook.svg'
          width={27}
          height={27}
          alt='facebook'
        />
        <FooterLink
          href='#'
          icon='/icons/twitter.svg'
          width={27}
          height={27}
          alt='twitter'
        />
        <FooterLink
          href='#'
          icon='/icons/instagram.svg'
          width={27}
          height={27}
          alt='instagram'
        />
      </div>
      <div className={styles.copyright}>
        @ 2020 - Georgios Katsanakis (A.K.A KronosGR)
      </div>
    </footer>
  );
}
