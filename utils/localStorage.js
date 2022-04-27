export const USER = 'user';
export const FAVORITES = 'favorites';

/**
 * save to local storage
 * @param {*} key name of key
 * @param {*} value value to store
 */
export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * load from local storage
 * @param {*} key name of key
 * @returns the information stored in local storage
 */
export const loadFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key)) || {};
  }
};

/**
 * check if logged in
 * @returns if is logged in
 */
export const checkIfLoggedIn = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem(USER) === null) return false;
    else return true;
  }
};

/**
 * Remove from local storage
 * @param {*} key to remove
 */
export const removeFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

/**
 * Toggles an accommodation's favorite
 * @param {*} id of accommodation to toggle
 */
export const toggleFavorites = (id) => {
  const favorites = loadFromLocalStorage(FAVORITES) || {};
  const enabled = favorites[id] || false;

  favorites[id] = !enabled;
  saveToLocalStorage(FAVORITES, favorites);
};

/**
 * checks if an accommodation is in favorites
 * @param {*} id of the accommodation
 * @returns true|false
 */
export const checkIfIsFavorite = (id) => {
  const favorites = loadFromLocalStorage(FAVORITES) || {};
  let isFavorite = false;

  Object.entries(favorites).forEach((item) => {
    if (item[0] === id.toString()) {
      if (item[1] === true) {
        isFavorite = true;
      }
    }
  });
  return isFavorite;
};
