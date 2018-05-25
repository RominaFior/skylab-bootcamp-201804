'use strict';

/**
 * First element in the given array that satisfies the given handler condition
 *
 * @example
 *
 * var res = find(['john', 'mary', 'jack'], function(v) { return v.indexOf('a') > -1 }) // -> 'mary'
 *
 * @param {Array} arr - Given array to iterate and search in
 * @param {Function} handler - Function that checks each item in the array
 *
 * @throws {Error} - Throws an error if the first parameter is not an array
 * @throws {Error} - Throws an error if the second parameter is not a function
 *
 * @returns {*} - The first element that checks with the given condition in the handler
 */
function find(arr, handler) {
    if (!(arr instanceof Array)) throw Error('Input arr should be an array');

    if (typeof handler !== 'function')
        throw Error('Input handler should be a function');

    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];

        if (handler(val)) return val;
    }
}
