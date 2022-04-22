import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { updateVotes } from '../../BackEnd/updateVote';
import { EMPTY, FULL, HALF } from '../../constants/StarState';
import { Error } from '../Error';

import { Star } from './Star';

export const Rating = ({ votes, votesTotal, aid }) => {
  const [error, setError] = useState(null);

  const Stars = ({ votes, votesTotal }) => {
    const router = useRouter();

    if (votes === null) votes = 0;
    if (votesTotal === undefined) votesTotal = 0;

    let score = parseInt(votesTotal) / parseInt(votes);

    const handleClickStar = async (e) => {
      const vote = parseInt(e.target.alt.replace('star', ''));
      console.log(vote, +votesTotal);
      try {
        const res = await updateVotes(
          aid,
          parseInt(votes) + 1,
          parseInt(votesTotal) + vote
        );
        console.log(res.result);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        router.reload(window.location.pathname);
      }
    };

    if (typeof score !== 'number') score = 0;

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
      <>
        <Stars votes={votes} votesTotal={votesTotal} />

        <Error msg='Something went wrong. We apologize' error={error} />
      </>
    </div>
  );
};
