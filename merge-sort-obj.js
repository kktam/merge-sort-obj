(function (root, factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.returnExportsGlobal = factory();
  }

}(this, function () {
  // UMD Definition above, do not remove this line

  // To get to know more about the Universal Module Definition
  // visit: https://github.com/umdjs/umd

  'use strict';

  var mergeSortObj = function mergeSortObj() {
	this.CMP_GREATER_THAN = 1;
	this.CMP_LESS_THAN = -1;
	this.CMP_EQUAL = 0;
    this.someProperty = 'value';	
  };

  mergeSortObj.prototype.someMethod = function (value) {
    return value + this.someProperty;
  };

  mergeSortObj.prototype.sort = function (arr, cmp) {
    if (arr.length == 0) {
      return [];
    }

    if (typeof cmp == "undefined" || cmp == null) {
      return [];
    }

    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (cmp(arr[i], pivot) === this.CMP_GREATER_THAN) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
    return this.sort(left, cmp).concat(pivot, this.sort(right, cmp));
  };

  return mergeSortObj;
}));
