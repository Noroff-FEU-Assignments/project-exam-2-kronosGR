import axios from 'axios';
import { API_URL, ENQUIRIES } from '../constants/Api';

/**
 * update read for enquiries
 * @param {*} jwt user jwt
 * @param {*} eid enquire id
 * @returns {result, error}
 */
export const updateEnquireRead = async (jwt, mid) => {
  let ret = { result: '', error: '' };

  const body = {
    read: true,
  };
  try {
    const res = await axios.put(API_URL + ENQUIRIES + `/${eid}`, body, {
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
