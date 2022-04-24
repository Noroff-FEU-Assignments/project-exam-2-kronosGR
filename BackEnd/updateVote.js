import axios from 'axios';
import { ACCOMMODATIONS, API_URL } from '../constants/Api';

/**
 * update votes
 * @param {*} aid accommodation id
 * @param {*} votes votes
 * @param {*} totalVotes total votes
 */
export const updateVotes = async (aid, votes, totalVotes) => {
  let ret = { result: '', error: '' };

  const body = {
    votes: votes,
    votestotal: totalVotes,
    score: Number(totalVotes / votes),
  };
  try {
    const res = await axios.put(API_URL + ACCOMMODATIONS + '/' + aid, body);

    if (res.error) {
      throw new Error('Sorry something went wrong');
    }
    ret.result = res.data;
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
