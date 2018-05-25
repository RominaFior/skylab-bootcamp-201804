'use strict';

describe('cube',function() {
    it('should return 27 on cube(3)', function() {
        expect(cube(3)).toBe(27);
    });

    it('should return [1,8,27] on cube([1,2,3])', function() {
        expect(cube([1,2,3])).toEqual([1,8,27]);
    });

    it('should throw an error on cube(true)',function() {
        expect(function() {
            cube(true);
        }).toThrow(Error ('Input number or array of numbers'));
    });

    it('should throw an error on cube([1, 2, "a"]', function () {
        expect(function() {
            cube([1, 2, "a"]);
        }).toThrow(Error ('All elements must be numbers'));
    });
});