/**
 * Format the date for strapi
 * @param {*} value the date object
 * @param {*} locale to date locale
 * @returns the date for strapi
 */

export const toStrapiDate = (value, locale = 'en-US') => {
  return new Date(value).toLocaleDateString(locale);
};
