const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u2757 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(input) {
  return input.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"