export const getRandomNumber = (min, max) => {
  const amplitud = max - min;
  const randomAmplitud = Math.round(Math.random() * amplitud);

  return min + randomAmplitud;
};

export default getRandomNumber;