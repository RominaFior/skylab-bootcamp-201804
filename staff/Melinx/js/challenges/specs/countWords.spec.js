'use strict';

describe('countWords', function () {
    it('should return 6 on countWords("hello world you\'re a bmf )', function () {
        expect(countWords("hello world you\'re a bmf ")).toBe(6);
    });

    it('should return 4 on countWords("hello 123 you suck")', function () {
        expect(countWords("hello 123 you suck")).toBe(4);
    });
    

    it('should throw an error on countWords(true)', function () {
        expect(function () {
            countWords(true);
        }).toThrow(Error('input text is not a string'));
    })

    it('should throw an error on countWords(1)', function () {
        expect(function () {
            countWords(1);
        }).toThrow(Error('input text is not a string'));
    })
});
