import axios from 'axios';
import { ACCOMMODATIONS, API_URL } from '../constants/Api';

export const getAccommodationById = async (id) => {
  let ret = { result: '', error: '' };

  try {
    const res = await axios.get(API_URL + ACCOMMODATIONS + '/' + id);

    if (res.error) {
      throw new Error('Sorry something went wrong');
    }
    ret.result = res.data;
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
