import Image from 'next/image';
import React from 'react';

export const Favorite = ({ isFavorite, click }) => {
  const style = { cursor: 'pointer' };
  return (
    <div>
      {isFavorite ? (
        <Image
          src='/icons/heart.svg'
          width={19}
          height={18}
          alt='toggle favorites'
          onClick={click}
          style={style}
        />
      ) : (
        <Image
          src='/icons/heart-empty.svg'
          width={19}
          height={18}
          alt='toggle favorites'
          onClick={click}
          style={style}
        />
      )}
    </div>
  );
};
