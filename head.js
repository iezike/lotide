const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u2757 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  }
};

const head = function(input){
  return input[0];
}

// Testing Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
