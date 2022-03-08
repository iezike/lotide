const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log('\u2757 Assertion Failed: [actual] !== [expected]');
  } else {
    console.log('\u2714 Assertion Passed: [actual] === [expected]');
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('n', 'N');