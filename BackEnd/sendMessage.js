import axios from 'axios';
import { ACCOMMODATIONS, API_URL, MESSAGES } from '../constants/Api';

/**
 * send message
 * @param {*} data message data
 */
export const sendMessage = async (data) => {
  let ret = { result: '', error: '' };

  const body = {
    name: data.username,
    phone: data.phone,
    message: data.message,
    email: data.email,
  };
  try {
    const res = await axios.post(API_URL + MESSAGES, body);
    console.log(res);

    if (res.error) {
      throw new Error('Sorry something went wrong');
    }
    ret.result = res.data;
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
