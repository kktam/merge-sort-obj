var assert = require('assert');

var mergeSortObj = require('../merge-sort-obj');

describe('merge-sort-obj', function () {

  var myinstance = new mergeSortObj();

  it('should have someProperty', function () {
    assert.equal(myinstance.someProperty, 'value');
  });

  it('should run someMethod', function () {
    assert.equal(myinstance.someMethod('hello '), 'hello value');
  });

});

