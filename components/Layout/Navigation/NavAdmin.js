import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NavAdmin() {
  return (
    <nav>
      <Link href='/index.js'>
        <a>
          <Image src='/icons/Logo.svg' width={50} height={100} />
        </a>
      </Link>
    </nav>
  );
}
