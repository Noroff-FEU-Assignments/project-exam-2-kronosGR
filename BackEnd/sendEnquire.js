import axios from 'axios';
import { API_URL, ENQUIRIES } from '../constants/Api';

/**
 * send enquire
 * @param {*} data enquire data
 */
export const sendEnquire = async (data) => {
  let ret = { result: '', error: '' };

  const body = {
    fullname: data.fullname,
    message: data.message,
    phone: data.phone,
    email: data.email,
    aid: data.aid,
    from: data.from,
    to: data.to,
  };
  try {
    const res = await axios.post(API_URL + ENQUIRIES, body);

    if (res.error) {
      throw new Error('Sorry something went wrong');
    }
    ret.result = res.data;
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
