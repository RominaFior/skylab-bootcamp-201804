'use strict';

describe('countChars', function() {
    it('should countChars("hello world") should return 11', function() {
        expect(countChars('hello world')).toBe(11);
    });

    it('should countChars(filterLetter("abracadabra", "a")) should return 5', function() {
        expect(countChars(filterLetter('abracadabra', 'a'))).toBe(5);
    });

    it('should countChars(true) should throw an error', function() {
        expect(function() {
            countChars(true);
        }).toThrow(Error('input str is not a string'));
    });

    it('should countChars([]) should throw an error', function() {
        expect(function() {
            countChars([]);
        }).toThrow(Error('input str is not a string'));
    });
});
