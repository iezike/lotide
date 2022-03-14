// Checks if two arrays are equals
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

///  Assert function to Validate Code
const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr) === false) {
    console.log("\u2757 Assertion Failed:", firstArr ,"!==", secondArr);
  } else {
    console.log("\u2714 Assertion Passed:", firstArr, "===", secondArr);
  }
};

//// To determine letter Positions
const letterPositions = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [sentence.indexOf(letter)];
      } else {
        let count = results[letter].length - 1;
        results[letter].push(sentence.indexOf(letter, results[letter][count] + 1));
      }
    }
  }
  return results;
};


const sensence = "lighthouse in the house";
console.log(letterPositions(sensence));

const lettersPositions = letterPositions(sensence);
assertArraysEqual(lettersPositions["l"], [ 0 ]);
assertArraysEqual(lettersPositions["i"], [ 1, 11 ]);
assertArraysEqual(lettersPositions["g"], [ 2 ]);
assertArraysEqual(lettersPositions["h"], [ 3, 5, 15, 18 ]);
assertArraysEqual(lettersPositions["t"], [ 4,14 ]);
assertArraysEqual(lettersPositions["o"], [ 6,19 ]);
assertArraysEqual(lettersPositions["u"], [ 7,20 ]);
assertArraysEqual(lettersPositions["s"], [ 8,21]);
assertArraysEqual(lettersPositions["e"], [ 9, 16, 22 ]);
assertArraysEqual(lettersPositions["n"], [ 12 ]);
