'use strict';

var input = [1, 2, 3];

test(
    function() {
        return input.wrap('[', ']');
    },
    'input.wrap("[", "]") should return ["[1]", "[2]", "[3]"]',
    function(result) {
        return (
            result.toString() === ['[1]', '[2]', '[3]'].toString() &&
            input.toString() === [1, 2, 3].toString()
        );
    }
);

test(
    withErrorCapturing(function() {
        return input.wrap(1, true);
    }),
    'input.wrap(1, true) should throw an error: Inputs should be strings',
    function(result) {
        return (
            result.message === 'Inputs should be strings' &&
            input.toString() === [1, 2, 3].toString()
        );
    }
);
