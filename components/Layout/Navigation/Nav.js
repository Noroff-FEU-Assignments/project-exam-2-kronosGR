import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import styles from '../../../styles/Nav.module.css';
import NavigationItem from './NavigationItem';
import { checkIfLoggedIn } from '../../../utils/localStorage';

export default function Nav() {
  const [isLoggedIn, setIsLoggedInd] = useState(false);

  useEffect(() => {
    setIsLoggedInd(checkIfLoggedIn);
  }, []);

  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a>
          <Image src='/icons/logo.png' width={61} height={53} alt='Home' />
        </a>
      </Link>
      <label htmlFor='hamb' className={styles.hamb_icon}>
        &#9776;
      </label>
      <input type='checkbox' id='hamb' />
      <ul id='hamb-menu' className={styles.nav_list}>
        <NavigationItem
          href='/'
          src='/icons/home.svg'
          title='Home'
          width='22'
          height='19'
          alt='Home'
        />
        <NavigationItem
          href='/accommodations'
          src='/icons/bed.svg'
          title='Accommodations'
          width='22'
          height='19'
          alt='Show accommodations'
        />
        <NavigationItem
          href='/contact'
          src='/icons/email.svg'
          title='Contact'
          width='22'
          height='19'
          alt='Contact us'
        />
        <NavigationItem
          href='/favorites'
          src='/icons/heart.svg'
          title='Favorites'
          width='22'
          height='19'
          alt='See your favorites'
        />
        {isLoggedIn && isLoggedIn ? (
          <NavigationItem
            href='/admin/'
            src='/icons/user.svg'
            title='Admin Panel'
            width='22'
            height='19'
            alt='admin panel'
          />
        ) : (
          <NavigationItem
            href='/login'
            src='/icons/user.svg'
            title='Login'
            width='22'
            height='19'
            alt='login'
          />
        )}
      </ul>
    </nav>
  );
}
