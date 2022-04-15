import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import styles from '../../../styles/NavigationItem.module.css';

export default function NavigationItem({ href, src, title, alt, width, height }) {
  const router = useRouter();
  return (
    <li>
      <Link href={href}>
        <a className={`${router.pathname === href ? 'active' : ''} ${styles.nav_a}`}>
          <Image src={src} alt={alt} width={width} height={height} className='red mh5' />
          {title}
        </a>
      </Link>
    </li>
  );
}
