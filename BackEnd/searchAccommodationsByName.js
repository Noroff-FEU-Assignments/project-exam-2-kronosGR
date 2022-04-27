import axios from 'axios';
import { ACCOMMODATIONS, API_URL } from '../constants/Api';

/**
 * search the accommodations by name
 * @param {*} name to search
 * @returns {result,error}
 */
export const searchAccommodationsByName = async (name) => {
  let ret = { result: '', error: '' };

  try {
    const res = await axios.get(API_URL + ACCOMMODATIONS + '?name_contains=' + name);

    if (res.error) {
      throw new Error('Sorry something went wrong');
    }
    ret.result = res.data;
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
