'use strict';

describe('cube', function() {
    it('should cube(3) return "27"', function() {
        expect(cube(3)).toBe('27');
    });

    it('should cube([1, 2, 3]) return "1, 8, 27"', function() {
        expect(cube([1, 2, 3])).toBe('1, 8, 27');

        // expect(cube([1, 2, 3])).toEqual([1, 8, 27]); // Evalua un array
    });

    it('should cube(true) throw an error!', function() {
        expect(function() {
            cube(true);
        }).toThrow(Error('Input should be a number'));
    });
});
