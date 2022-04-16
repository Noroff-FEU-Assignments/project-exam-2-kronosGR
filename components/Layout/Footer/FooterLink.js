import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../../../styles/FooterLink.module.css';
export default function FooterLink({ href, icon, alt, width, height }) {
  return (
    <div>
      <Link href={href}>
        <a className={styles.container}>
          <Image src={icon} width={width} height={height} alt={alt} />
        </a>
      </Link>
    </div>
  );
}
