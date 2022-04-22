export const amenities = [
  {
    name: 'WI-FI',
    icon: '/icons/wifi.svg',
  },
  {
    name: 'Swimming Pool',
    icon: '/icons/pool.svg',
  },
  {
    name: 'Child Friendly',
    icon: '/icons/child-friendly.svg',
  },
  {
    name: 'Accessible',
    icon: '/icons/accessible.svg',
  },
  {
    name: 'Washing Machine',
    icon: '/icons/water.svg',
  },
  {
    name: 'Fitness',
    icon: '/icons/fitness.svg',
  },
];

export const getAmenityByName = (name) => {
  const tmp = amenities.filter((item) => item.name === name);
  return tmp[0];
};
