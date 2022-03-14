//// assertArraysEqual function
const eqArrays  = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  } else {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr) === false) {
    console.log("\u2757 Assertion Failed:", firstArr ,"!==", secondArr);
  } else {
    console.log("\u2714 Assertion Passed:", firstArr, "===", secondArr);
  }
};
////////////////////////////////


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

// Testing code
let array = [1,2,12,10,11,19,21];
assertArraysEqual(middle(array), [10]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);

