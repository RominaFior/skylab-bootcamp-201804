'use strict';

function countWords(text) {
    if (typeof text !== 'string') throw Error('input text is not valid');

    return text.split(' ').filter(function (w) { return w.trim() !== ''; }).length;
}