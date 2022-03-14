// Assert function to validate output values
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u2757 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  }
};

/// Implementing Counting letters in a sensence 
const countLetters = function(sentence) {
  result = {};
  for(let letter of sentence){
    if(letter !== " ") {
      if(result[letter]){
        result[letter] +=1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

/// Testing code 
const sentence = countLetters("lighthouse, in the house")

assertEqual(sentence['l'], 1);
assertEqual(sentence['h'], 4);
assertEqual(sentence['e'], 2); // expect this to fail.
assertEqual(sentence['s'], 2);

module.exports = countLetters;