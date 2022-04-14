import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../../../styles/NavAdmin.module.css';

export default function NavAdmin() {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a>
          <Image src='/icons/logo.png' width={48} height={28} />
        </a>
      </Link>
      <ul className={styles.nav_list}>
        <li>Home</li>
        <li>
          <Link href='/accommodations'>
            <a>Accommodations</a>
          </Link>
        </li>
        <li>Contact</li>
        <li>Favorites</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
