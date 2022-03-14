// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
// // Testing code
// const array = [1,2,12,10,11,19,21];
// assertArraysEqual(middle(array), [10]);
// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1,2]),[]);

const middle = require('../middle');
const assert = require('chai').assert;

describe("#Midlle", () => {
  it("Returns [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });
});

it("Returns [10] for [1,2,12,10,11,19,21]", () => {
  assert.deepEqual(middle([1,2,12,10,11,19,21]),[10]);
});

it("Returns [[10],[]] for [1,2,12,10,[],11,19,21]", () => {
  assert.deepEqual(middle([1,2,12,10,[],11,19,21]),[10,[]]);
});