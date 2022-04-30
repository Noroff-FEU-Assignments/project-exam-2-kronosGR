import Link from 'next/link';
import React from 'react';

import styles from '../../../styles/FooterLink.module.css';
import { PropTypes } from 'prop-types';
export default function FooterLink({ href, children }) {
  return (
    <div>
      <Link href={href}>
        <a className={styles.container}>{children}</a>
      </Link>
    </div>
  );
}

FooterLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};
