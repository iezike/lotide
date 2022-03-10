const eqArrays  = function(firstArr, secondArr) {
  let result = true;
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr) === false) {
    console.log("\u2757 Assertion Failed:", firstArr ,"!==", secondArr);
  } else {
    console.log("\u2714 Assertion Passed:", firstArr, "===", secondArr);
  }
};



// Create map function will take in two arguments: array and a call function
// map function will return a new array based on the results of the callback function.


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Defining three diference map function used as "callback"(s)
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word);


//Testing code
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 6, 7, 2, 5, 3]);
assertArraysEqual(results3, words);
