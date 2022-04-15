import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../../../styles/NavAdmin.module.css';
import NavigationItem from './NavigationItem';

export default function NavAdmin() {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a>
          <Image src='/icons/logo.png' width={48} height={28} alt='Home' />
        </a>
      </Link>
      <ul className={styles.nav_list}>
        <li>
          <NavigationItem
            href='/'
            src='/icons/home.svg'
            width='22'
            height='19'
            alt='Home'
          />
        </li>
        <li>
          <Link href='/accommodations'>
            <a>
              <Image src='/icons/bed.svg' width={22} height={19} className='red' />
              Accommodations
            </a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>
              <Image src='/icons/email.svg' width={22} height={19} className='red' />
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href='/favorites'>
            <a>
              <Image src='/icons/heart.svg' width={22} height={19} className='red' />
              Favorites
            </a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>
              <Image src='/icons/user.svg' width={22} height={19} className='red' />
              Login
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
