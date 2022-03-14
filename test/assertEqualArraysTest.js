const assertArraysEqual = require('../assertArraysEqual');
// Testing code
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([3, 2, 1], [1, 2, 3]);
assertArraysEqual([ 2, 1], [2,1]);
assertArraysEqual([], []);
