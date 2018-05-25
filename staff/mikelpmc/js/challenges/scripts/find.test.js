'use strict';

var names = ['john', 'mary', 'jack'];

/**
 * POSITIVE CASES
 */

test(
    function() {
        return find(names, function(v) {
            return v.indexOf('a') > -1;
        });
    },
    'find(names, function(v) { return v.indexOf("a") > -1; }) should return a String with the finded name "mary"',
    function(result) {
        return result === 'mary';
    }
);
