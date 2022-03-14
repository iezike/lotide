// const tail = require('../tail');
// const assertEqual = require('../assertEqual');
// //testing code
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"



const assert = require('chai').assert;
const tail   = require('../tail');

describe("#Tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});

it("returns [1111, 3] for [[22], 1111, 3]", () => {
  assert.deepEqual(tail([[22], 1111, 3]), [1111, 3]);
});

it("returns [] for []", () => {
  assert.deepEqual(tail([]), []);
});