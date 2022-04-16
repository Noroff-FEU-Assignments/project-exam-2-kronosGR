import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../../../styles/FooterLink.module.css';
export default function FooterLink({ href, children }) {
  return (
    <div>
      <Link href={href}>
        <a className={styles.container}>{children}</a>
      </Link>
    </div>
  );
}
