import axios from 'axios';
import { MessageList } from '../components/Messages/MessageList';
import { API_URL } from '../constants/Api';

/**
 * update read for messages
 * @param {*} jwt user jwt
 * @param {*} mid message id
 * @returns {result, error}
 */
export const updateVotes = async (jwt, mid) => {
  let ret = { result: '', error: '' };

  const body = {
    read: true,
  };
  try {
    const res = await axios.put(API_URL + MessageList + `/${mid}`, body, {
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
