// ACTUAL FUNCTION
const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 1) {
    middleArray.push(array[Math.floor(array.length / 2)]);
  } else {
    middleArray.push(array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]);
  }
  return middleArray;
};

module.exports = middle;
