'use strict';
/**
     * Wraps the items of an input with left and right text array and return them in a new array.
     * 
     * @example
     * 
     * var a = [1, 2, 3];
     * 
     * a.wrap('[', ']'); // -> ['[1]', '[2]', '[3]']
     * 
     * a.wrap('[', ']').wrap('{', '}'); // -> ['{[1]}', '{[2]}', '{[3]}']
     * 
     * a.wrap('[', ']').wrap('{', '}').wrap('<', '>'); // -> ['<{[1]}>', '<{[2]}>', '<{[3]}>']
     * 
     * @param {string} left - The left text to set in the left side of the wrapping.
     * @param {string} right - The right text to set in the right side of the wrapping.
     * 
     * @throws {Error} - If input left and/or right texts are not valid.
     * 
     * @returns {Array} - The resulting array with the contents of the input array wrapped by left and right symbols.
     */


if (typeof Array.prototype.wrap !== 'function')


var arr = [1,2,3];

Array.prototype.wrap = function (left, right) {
    if (typeof left !== 'string' || typeof right !== 'string') throw Error('inputs left and right should be strings');

    for (var i = 0; i < this.length; i++) {
        var newElement = left + this[i] + right;
        this[i] = newElement;
    }
    return this;
};



