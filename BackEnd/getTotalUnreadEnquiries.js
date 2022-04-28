import axios from 'axios';
import { API_URL, ENQUIRIES } from '../constants/Api';

/**
 * get total unread enquiries
 * @param {*} jwt of the user authentication
 * @returns {result,error}
 */
export const getTotalUnreadEnquiries = async (jwt) => {
  let ret = { result: '', error: '' };
  try {
    const res = await axios.get(API_URL + ENQUIRIES + '?read=false', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (res.error) {
      throw new Error('Sorry something went wrong');
    }
    ret.result = res.data.length || 0;
  } catch (err) {
    console.log(err);
    ret.error = err.stack;
  }

  return ret;
};
