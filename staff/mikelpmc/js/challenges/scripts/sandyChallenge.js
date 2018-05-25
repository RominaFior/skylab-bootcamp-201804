'use strict';

if (!(Array.prototype.sandyBrainFuck instanceof Function)) {
    /**
     * Write an Array polyfill wich with an array of numbers done,
     * take his values and put a number 0 before a any valor with only one number. 
     * If the valor have two numbers or more, it don’t do nothing about.
     *
     * Then order the array from highest to lowest numbers and save the odd numbers and the even numbers separated.
     *
     * Then return the two lists.
     *
     * @example
     *
     * var array = [82, 3, 2, 24, 9, 1, 56, 13];
     *
     * array.noNameFunc(); // → [“82”, “56”, “24”, “02”, “01”], [“13”, “09”, “03”]
     *
     * @param {Array} arr - Array of numbers
     *
     * @throws {Error} - Throws an error if the given input is not an array of numbers
     *
     * @returns {Array} - An array with two arrays in it, one with even numbers and the other with the odd ones
     */
    Array.prototype.sandyBrainFuck = function() {
        if (this.some(isNaN))
            throw Error('Input array should only contain numbers');

        var res = this.sort(function(a, b) {
            return b > a;
        }).map(function(n) {
            return n < 10 ? '0' + n : n.toString();
        });

        var even = res.filter(function(n) {
            return n % 2 === 0;
        });
        var odd = res.filter(function(n) {
            return !even.includes(n) ? n : '';
        });

        return [even, odd];
    };
}
