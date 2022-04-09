import data from './data.json';

/**
 * @param {boolean} strigify 
 * @returns {string|object} 
 */
module.exports = function iMessedUp (strigify = true) {
  const index = getRandomNumber({ range: data.length});
  if (!strigify)
    return data[index];
  return `${data[index].title}. Source: ${data[index].source}`
}

/**
 * @param {number} range
 * @returns {number} random number
 */
function getRandomNumber({ range  }) {
  if (!range) return 0;
  return Math.round(Math.random() * (range - 1));
}