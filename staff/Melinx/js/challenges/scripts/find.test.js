'use strict';

test(
    function() {
        return find(['john', 'mary', 'jack'], function(v) { return v.indexOf('c') > -1; });
    },
    "find(['john', 'mary', 'jack'], function(v) { return v.indexOf('c') > -1; }) should return 'jack'",
    function(result) {
        return result === 'jack';
    }
);
'use strict';

test(
    function() {
        return find(arr, function(v) {
            return v.indexOf('a') > -1;
        });
    },
    "find(names, function(v) { return v.indexOf('a') > -1; }) should return 'mary'",
    function(result) {
        return result === 'mary';
    }
);

test(
    withErrorCapturing(
        function() {
            return find(["john", "mary", "jack"]);
        }
    ),
    'find(["john", "mary", "jack"]) should throw error',
    function(result) {
        return result.message === 'input condition is missing';
    }
);

test(
    withErrorCapturing(
        function() {
            return find(1);
        }
    ),
    'find(1) should throw error',
    function(result) {
        return result.message === 'Input arr should be an array';
    }
);
