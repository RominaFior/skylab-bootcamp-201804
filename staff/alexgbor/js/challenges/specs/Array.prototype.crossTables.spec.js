'use strict';
var input=createRandom();

describe('crossTables', function() {
    it('should return the common numbers between any pair of arrays (or all of them) in input on input.crossTables()', function() {
        expect(input.crossTables()).not.toBe(input);
    });
});