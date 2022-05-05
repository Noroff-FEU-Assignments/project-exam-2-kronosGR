import React from 'react';

import styles from '../../../styles/Footer.module.css';
import Facebook from '../Icons/Facebook';
import FooterLink from './FooterLink';
import Twitter from '../Icons/Twitter';
import Instagram from '../Icons/Instagram';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <FooterLink href='#'>
          <Facebook width={27} height={27} />
        </FooterLink>
        <FooterLink href='#'>
          <Twitter width={27} height={27} />
        </FooterLink>
        <FooterLink href='#'>
          <Instagram width={27} height={27} />
        </FooterLink>
      </div>
      <div className={styles.copyright}>
        @ 2022 - Georgios Katsanakis (A.K.A KronosGR)
      </div>
    </footer>
  );
}
