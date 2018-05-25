'use strict';

var input = [1, 2, 3];
var output = [];

test(
    function() {
        forEach(input, function(v) { output.push(v) });

        return output;
    },
    'forEach(input, function(v) { output.push(v) }) should fulfill output with input values [' + input + ']',
    function(result) {
        return input.toString() === result.toString();
    }
);

test(
    withErrorCapturing(
        function() {
            forEach();
        }
    ),
    'forEach() without arguments should throw an error',
    function(result) {
        return result.message === 'input array is not an array';
    }
);

test(
    withErrorCapturing(
        function() {
            forEach(undefined, function() {});
        }
    ),
    'forEach(undefined, function() {}) without first argument should throw an error',
    function(result) {
        return result.message === 'input array is not an array';
    }
);

test(
    withErrorCapturing(
        function() {
            forEach(input);
        }
    ),
    'forEach(input) without second argument should throw an error',
    function(result) {
        return result.message === 'input handler is not a function';
    }
);
