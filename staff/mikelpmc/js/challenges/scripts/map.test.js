'use strict';

var input = [1, 2, 3];

test(
    function() {
        return map(input, function(v) {
            return v ** 2;
        });
    },
    'map([1, 2, 3], function(v) { return v**2; }) should return a new array with values [1, 4, 9]',
    function(result) {
        return (
            input !== result &&
            result.toString() === '1,4,9' &&
            input.toString() === '1,2,3'
        );
    }
);

test(
    withErrorCapturing(function() {
        return map();
    }),
    'map() should throw an error if input array is not valid',
    function(result) {
        return result.message === 'input array is not valid';
    }
);

test(
    withErrorCapturing(function() {
        return map([]);
    }),
    'map() should throw an error if input handler is not valid',
    function(result) {
        return result.message === 'input handler is not valid';
    }
);
