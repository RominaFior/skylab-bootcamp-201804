'use strict';

// - wrap

// create a polyfill and its test, in files Array.prototype.wrap.js (and .test.js, respectively) ,
// that performs as the following demos show:

// demos:

// var a = [1, 2, 3]

// a.wrap('[', ']'); // -> ['[1]', '[2]', '[3]']

// a.wrap('[', ']').wrap('{', '}'); // -> ['{[1]}', '{[2]}', '{[3]}']

// a.wrap('[', ']').wrap('{', '}').wrap('<', '>'); // -> ['<{[1]}>', '<{[2]}>', '<{[3]}>']

if (!(Array.prototype.wrap instanceof Function)) {
    Array.prototype.wrap = function(str1, str2) {
        if (typeof str1 !== 'string' || typeof str2 !== 'string')
            throw Error('Inputs should be strings');

        return this.map(function(v) {
            return str1 + v + str2;
        });
    };
}
