import Image from 'next/image';
import React from 'react';

const FULL = 'full';
const EMPTY = 'empty';
const HALF = 'half';

export const Rating = ({ votes, votesTotal }) => {
  const Star = ({ kind }) => {
    let icon = '';
    switch (kind) {
      case EMPTY:
        icon = '/icons/star-outline.svg';
        break;
      case HALF:
        icon = '/icons/star-half.svg';
        break;
      case FULL:
        icon = '/icons/star.svg';
        break;
      default:
        break;
    }

    return <Image src={icon} width={28} height={27} alt='star' />;
  };

  const Stars = ({ votes, votesTotal }) => {
    if (votes === null) votes = 0;
    if (votesTotal === undefined) votesTotal = 0;

    let score = parseInt(votesTotal) / parseInt(votes);

    if (typeof score === 'number') score = 0;
    console.log(score, votes, votesTotal);

    const stars = [];
    const tmp = [];
    for (let i = 0.5; i <= 5.0; i += 0.5) {
      console.log(i, score);
      if (i <= score) {
        tmp.push(1);
      } else {
        tmp.push(0);
      }
    }
    console.log(tmp);
    for (let x = 0; x < tmp.length; x++) {
      if (tmp[x] === 1 && tmp[x + 1] == 1) {
        stars.push(FULL);
      } else if (tmp[x] === 1 && tmp[x + 1] == 0) {
        stars.push(HALF);
      } else {
        stars.push(EMPTY);
      }
      x++;
    }
    console.log(stars);

    return stars.map((item, idx) => {
      return <Star kind={item} key={idx} />;
    });
  };

  return (
    <div>
      <Stars votes={votes} votesTotal={votesTotal} />
    </div>
  );
};
