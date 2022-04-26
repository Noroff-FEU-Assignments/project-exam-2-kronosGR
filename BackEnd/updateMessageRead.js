import axios from 'axios';
import { API_URL, MESSAGES } from '../constants/Api';

/**
 * update read for messages
 * @param {*} jwt user jwt
 * @param {*} mid message id
 * @returns {result, error}
 */
export const updateMessageRead = async (jwt, mid) => {
  let ret = { result: '', error: '' };

  const body = {
    read: true,
  };
  try {
    const res = await axios.put(API_URL + MESSAGES + `/${mid}`, body, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (res.error) {
      throw new Error('Sorry something went wrong');
    }
    ret.result = res.data;
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
