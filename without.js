const without = function(source, itemsToRemove) {
  let difference = source.filter(x => itemsToRemove.indexOf(x) === -1);
  console.log(difference);
}

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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // ==> ["hello", "world"] 
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);