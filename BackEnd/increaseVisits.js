import axios from 'axios';
import { ACCOMMODATIONS, API_URL } from '../constants/Api';

/**
 * increase visits
 * @param {*} aid accommodation id
 * @param {*} visits visits
 */
export const increaseVisits = async (aid, visits) => {
  let ret = { result: '', error: '' };

  const body = {
    visits,
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
