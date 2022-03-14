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


// Testing code
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([3, 2, 1], [1, 2, 3]);