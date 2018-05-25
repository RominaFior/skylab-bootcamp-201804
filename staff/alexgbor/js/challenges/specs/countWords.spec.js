'use strict';

describe('countWords', function() {
    it('should return 2 on countWords("Hello World")', function() {
        expect(countWords("Hello World")).toBe(2);
    });

    it('should throw an error on countWords(true)', function() {
        expect(function() {
            countWords(true);
        }).toThrow(Error("You must input a string."));
    });
});