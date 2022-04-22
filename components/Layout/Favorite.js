import Image from 'next/image';
import React from 'react';

export const Favorite = ({ isFavorite, click }) => {
  return (
    <div>
      {isFavorite ? (
        <Image
          src='/icons/heart.svg'
          width={19}
          height={18}
          alt='toggle favorites'
          onClick={click}
        />
      ) : (
        <Image
          src='/icons/heart-empty.svg'
          width={19}
          height={18}
          alt='toggle favorites'
          onClick={click}
        />
      )}
    </div>
  );
};
