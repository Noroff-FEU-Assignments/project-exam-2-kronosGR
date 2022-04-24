import axios from 'axios';
import { ACCOMMODATIONS, API_URL } from '../constants/Api';

export const getMostFavorites = async () => {
  let ret = { result: '', error: '' };

  try {
    const res = await axios.get(API_URL + ACCOMMODATIONS);
    if (Array.isArray(res.data)) {
      ret.result = res.data;
    } else {
      throw new Error('Something went wrong');
    }
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
