import Link from 'next/link';
import React from 'react';

import styles from '../../styles/Button.module.css';
import { Colors } from '../../constants/Colors';
import Image from 'next/image';

export default function Button(props) {
  return (
    <div>
      <Link href={props.url}>
        <a className={styles.container} style={{ width: props.width }}>
          <Image
            src='/icons/add.svg'
            className={styles.icon}
            alt='add'
            width={29}
            height={26}
          />
          {props.title}
        </a>
      </Link>
    </div>
  );
}
