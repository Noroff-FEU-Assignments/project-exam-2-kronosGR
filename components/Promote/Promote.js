import Image from 'next/image';
import React from 'react';

import styles from '../../styles/Promote.module.css';

export default function Promote(props) {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <Image alt={props.title} src={props.img} layout='fill' />
      <span className={styles.title}>{props.title}</span>
    </div>
  );
}
