import axios from 'axios';
import { API_URL, ENQUIRIES } from '../constants/Api';

/**
 * get all enquiries
 * @param {*} jwt user
 * @returns {result, error}
 */
export const getEnquiries = async (jwt) => {
  let ret = { result: '', error: '' };

  try {
    const res = await axios.get(API_URL + ENQUIRIES, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
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
