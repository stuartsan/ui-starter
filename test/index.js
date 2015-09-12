var assert = require('assert');
var add = require('../src/index.js').add;

describe('add()', function() {
  it('should be rly good at math', function() {
    assert.equal(add(1, 1), 2);
  });
});

describe('this starter proj', function() {
  it('should work ok with es6 because babel', function() {
    assert.doesNotThrow(function() {
      var x = () => 5;
      var y = `oh hai`;
    });
  });
});
