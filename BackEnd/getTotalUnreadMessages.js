import axios from 'axios';
import { API_URL, MESSAGES } from '../constants/Api';

/**
 * get total unread messages
 * @param {*} jwt of the use authentication
 * @returns {result,error}
 */
export const getTotalUnreadMessages = async (jwt) => {
  let ret = { result: '', error: '' };
  try {
    const res = await axios.get(API_URL + MESSAGES + '?read=false', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (res.error) {
      throw new Error('Sorry something went wrong');
    }
    ret.result = res.data.length;
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
