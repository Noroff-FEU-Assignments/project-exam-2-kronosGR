export const USER = 'user';
export const FAVORITES = 'favorites';

export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key)) || {};
  }
};

export const checkIfLoggedIn = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem(USER) === null) return false;
    else return true;
  }
};

export const removeFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

export const toggleFavorites = (id) => {
  const favorites = loadFromLocalStorage(FAVORITES) || {};
  const enabled = favorites[id] || false;

  favorites[id] = !enabled;
  saveToLocalStorage(FAVORITES, favorites);
};

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
