'use strict';

var input = [1,2,3];
test (
    function() {
        return map (input, function(v) { return v**2; })
    },
    'map([1,2,3], function(v) { return v**}) should return [1,4,9]',
    function(result) {
        return input !== result && result.toString() === '1,4,9' && input.toString() == result.toString() === '1,2,3'; // 3rd condition makes sure we didn't modify the input array.
    }
)

test (
    withErrorCapturing(
        function(){
            return map();
        }
    ),
    'map should throw an error if input array is undefined',
    function(result) {
        return result.messsage === 'input handler is not valid';
    }
);
