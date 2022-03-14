const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
// Testing code
const array = [1,2,12,10,11,19,21];
assertArraysEqual(middle(array), [10]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
