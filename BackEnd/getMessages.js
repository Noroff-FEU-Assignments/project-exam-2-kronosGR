import axios from 'axios';
import { API_URL, MESSAGES } from '../constants/Api';

/**
 * get all messages
 * @param {*} jwt get all messages
 * @returns {result, error}
 */
export const getMessages = async (jwt) => {
  let ret = { result: '', error: '' };

  try {
    const res = await axios.get(API_URL + MESSAGES, {
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
