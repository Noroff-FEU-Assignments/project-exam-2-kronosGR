import axios from 'axios';
import { ACCOMMODATIONS, API_URL } from '../constants/Api';

export const getAccommodations = async () => {
  let ret = { result: '', error: '' };

  try {
    const res = await axios.get(API_URL + ACCOMMODATIONS);
    ret.result = res.data;
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
