// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`\u2757 Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
//   }
// };

// Find key element by its value
const findKeyByValue = function(object, value) {
  let output = undefined;
  for (let key in object) {
    if (object[key] === value) {
      output = key;
    }
  }
  return output;
};

// //Testing Code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;