const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u2757 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  }
};

/// Checking whether object1 is the same as object2
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    let objectTwoKeys = Object.keys(object2);
    for (let x in object1) {
      if (!objectTwoKeys.includes(x)) {
        return false;
      }
      if (object1[x] !== object2[x]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// Testing code.
const ab = { a: "1", b: "2", c: "4" };
const ba = { b: "2", a: "1" };
const z = eqObjects(ab,ba);
console.log(z);