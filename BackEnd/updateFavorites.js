import axios from 'axios';
import { ACCOMMODATIONS, API_URL } from '../constants/Api';

/**
 * update favorites
 * @param {*} aid accommodation id
 * @param {*} favorites favorites amount
 */
export const updateFavorites = async (aid, favorites) => {
  let ret = { result: '', error: '' };

  const body = {
    favorites: favorites,
  };
  try {
    const res = await axios.put(API_URL + ACCOMMODATIONS + '/' + aid, body);

    if (res.error) {
      throw new Error('Sorry something went wrong');
    }
    ret.result = res.data;
  } catch (err) {
    ret.error = err.stack;
  }

  return ret;
};
