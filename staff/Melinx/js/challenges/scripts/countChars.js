'use strict';

/** THIS IS HOW TO DOCUMENT YOUR CODE, right above function, and order of @ DOES MATTER. Example/param/throws/returns.. and many more. SEE http://usejsdoc.org/. When hovering over function name below, this info will show in a window, and above it will give us "function countChars(str: string, condition: Function): number" thanks to the documentation we've given.
 * 
 * Count chars in text (string).
 * 
 * @example
 * var count = countChars('hello world', function(c)) { return c === 'e';}); // --> 1
 * 
 * @param {string} text - should be the input text to count chars from.
 * @param {Function} [condition] - a condition to count chars, optional!
 * 
 * 
 * @throws {Error} - if input text is not a string.
 * @throws {Error} - if given condition is not a function.

 * 
 * @returns {number} - The num of chars count in the text input. 
 * 
 */

function countChars(text, condition) {
    // chk input text is a string
    if (typeof text !== 'string')
        throw Error('input text is not a string');

    // chk condition exists, otherwise return string length
    if (!condition) {
        return text.length;
    }
        // chk condition is valid, must be a function
        if (typeof condition !== 'function')
            throw Error('input condition is not a function');

        var count = 0;

        for (var i = 0; i < text.length; i++) {
            var val = text[i];

        if (condition(val)) count++;
    }

    return count;
}
