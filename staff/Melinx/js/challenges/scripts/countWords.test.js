'use strict';

//positive-case OR success case testing:

test(
    function() {
        return countWords("hello world you\'re a bmf ");
    },
    'countWords("hello world you\'re a bmf") should return 6',
    function(result) {
        return result === 6;
    }
);



// fail-case OR error-case testing:

test(
    withErrorCapturing(function() {
        countWords(true);
    }),
    'countWords(true) should throw an error',
    function(result) {
        return result.message === 'input text is not a string';
    }
);

test(
    withErrorCapturing(function() {
        countWords(1);
    }),
    'countWords(1) should throw an error',
    function(result) {
        return result.message === 'input text is not a string';
    }
);

