import axios from 'axios';
import { API_URL, ENQUIRIES } from '../constants/Api';

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
    ret.result = res.data.length;
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
