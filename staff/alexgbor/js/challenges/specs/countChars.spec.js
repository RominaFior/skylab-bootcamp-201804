'use strict';

describe('countChars',function() {
    it('should return 11 on countChars("hello world")', function() {
        expect(countChars('hello world')).toBe(11);
    });

    it('should throw an error on countChars(true)',function() {
        expect(function() {
            countChars(true);
        }).toThrow(Error ('input str is not a string'));
    });

    it('should return 5 on countChars("abracadabra", function(c) { return c === "a"; }', function () {
        expect(countChars('abracadabra', function(c) { return c === 'a'; })).toBe(5);
    });
});