export const USER = 'user';

export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || {};
};

export const checkIfLoggedIn = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem(USER) === null) return false;
    else return true;
  }
};
