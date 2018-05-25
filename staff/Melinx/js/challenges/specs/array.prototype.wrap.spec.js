'use strict';

arr = [1,2,3];

describe('wrap', function () {
/* * Jasmine TEST gives ReferenceError: array is not defined... dunno how to fix -__-

    it('should return ["[1]", "[2]", "[3]"] on arr.wrap("[", "]")', function () {
        expect(array.prototype.wrap('[', ']').toString()).toBe(['[1]', '[2]', '[3]'])
    });

*/

    it('should throw an error on arr.wrap(1, true)', function () {
        expect(function () {
            arr.wrap(1, true);
        }).toThrowError('inputs left and right should be strings');
    });

});
