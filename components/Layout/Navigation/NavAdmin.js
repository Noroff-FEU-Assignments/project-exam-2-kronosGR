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
          href='/admin/'
          src='/icons/user.svg'
          title='Admin Panel'
          width='22'
          height='19'
          alt='AdminPanel'
        />
        <NavigationItem
          href='/admin/messages'
          src='/icons/email.svg'
          title='Messages'
          width='22'
          height='19'
          alt='Messages'
        />
        <NavigationItem
          href='/admin/enquiries'
          src='/icons/question-mark.svg'
          title='Enquiries'
          width='22'
          height='19'
          alt='Enquiries'
        />
        <NavigationItem
          href='/admin/add'
          src='/icons/add.svg'
          title='Add'
          width='22'
          height='19'
          alt='add'
        />
        <NavigationItem
          href='/admin/logout'
          src='/icons/exit.svg'
          title='Logout'
          width='22'
          height='19'
          alt='Logout'
        />
      </ul>
    </nav>
  );
}
