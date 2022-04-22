import Image from 'next/image';
import React from 'react';
import { EMPTY, FULL, HALF } from '../../constants/StarState';

import { Star } from './Star';

export const Rating = ({ votes, votesTotal }) => {
  const Stars = ({ votes, votesTotal }) => {
    if (votes === null) votes = 0;
    if (votesTotal === undefined) votesTotal = 0;

    let score = parseInt(votesTotal) / parseInt(votes);

    const handleClickStar = (e) => {
      console.log(e.target.alt);
      //TODO ADD TO VOTES and refresh the stars
    };

    if (typeof score === 'number') score = 0;

    const stars = [];
    const tmp = [];
    for (let i = 0.5; i <= 5.0; i += 0.5) {
      if (i <= score) {
        tmp.push(1);
      } else {
        tmp.push(0);
      }
    }

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

    return stars.map((item, idx) => {
      return <Star kind={item} key={idx} id={idx + 1} onClick={handleClickStar} />;
    });
  };

  return (
    <div>
      <Stars votes={votes} votesTotal={votesTotal} />
    </div>
  );
};
