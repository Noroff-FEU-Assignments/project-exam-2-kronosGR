import Link from 'next/link';
import React from 'react';

import styles from '../styles/Button.module.css';
import Image from 'next/image';

export default function Button(props) {
  return (
    <div
      className={styles.container}
      style={{ width: props.width }}
      onClick={props.onClick}>
      <Image src={props.svg} className={styles.icon} alt='add' width={29} height={26} />
      {props.title}
    </div>
  );
}
