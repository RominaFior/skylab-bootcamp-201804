// Funcion para contar los caracteres
'use strict';

/**
 * Count chars in a string.
 *
 * @example
 *
 * var count = countChars('hola') // -> 4
 *
 * @param {string} str - The string to count the chars from
 *
 * @throws {Error} - If input text is not a String.
 *
 * @returns {number} - Number of chars count in the input string
 */
function countChars(str) {
    if (typeof str !== 'string') throw Error('input str is not a string');

    return str.length;
}

/**
 * Removes all the occurrences of the given char in the given string.
 *
 * @example
 *
 * var res = filterLetter('hola que tal', 'a') // -> 'hol que tl'
 *
 * @param {string} str - String to filter out.
 * @param {string} letter - Letter to remove from.
 *
 * @throws {Error} - If input str or letter are not a string
 *
 * @returns {string} - String without the passed letter
 */
function filterLetter(str, letter) {
    if (typeof str !== 'string' || typeof letter !== 'string')
        throw Error('input str is not a string');

    return str
        .split('')
        .filter(s => s === letter)
        .join('');
}
