'use strict';

test(
    function() {
        return countWords('hello world');
    },
    'countWords("hello world") should return 2',
    function(result) {
        return result === 2;
    }
);

test(
    function() {
        return countWords('hello    world ');
    },
    'countWords("hello    world ") - applied on text with two words and extra blank spaces - should return 2',
    function(result) {
        return result === 2;
    }
);

test(
    withErrorCapturing(
        function() {
            return countWords();
        }
    ),
    'countWords() - without arguments - should throw error',
    function(result) {
        return result.message === 'input text is not valid';
    }
);