import axios from 'axios';
import { ACCOMMODATIONS, API_URL } from '../constants/Api';

/**
 * get the most favorite accommodations
 * @returns {result,error}
 */
export const getMostFavorites = async () => {
  let ret = { result: '', error: '' };

  try {
    const res = await axios.get(
      API_URL + ACCOMMODATIONS + '?_sort=favorites:DESC&_limit=6'
    );
    if (Array.isArray(res.data)) {
      console.log(res.result);
      ret.result = res.data;
    } else {
      throw new Error('Something went wrong');
    }
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
