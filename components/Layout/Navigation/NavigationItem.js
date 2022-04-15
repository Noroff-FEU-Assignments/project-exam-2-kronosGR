import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../../../styles/NavigationItem.module.css';

export default function NavigationItem({ href, src, alt, width, height }) {
  return (
    <Link href={href}>
      <a className={styles.nav_a}>
        <Image src={src} alt={alt} width={width} height={height} className='red mh5' />
        Home
      </a>
    </Link>
  );
}
