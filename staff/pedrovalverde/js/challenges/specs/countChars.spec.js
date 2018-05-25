'use strict'
describe('countChars Test', function () { //
    it("should countChars('hello world') return 10", function () {
        expect(countChars('hello world')).toBe(11);
    });

    it('countChars("0123456789") should return 10', function () {
        expect(countChars('0123456789')).toBe(10);
    });

    it("should countChars(true) throw an error", function () {
        expect(function () {
            countChars(true);
        }).toThrow(Error("input is not a string"));
    });

    it("should countChars(1) throw an error", function () {
        expect(function () {
            countChars(1);
        }).toThrow(Error("input num is not a string"));
    });

    it("should countChars([]) throw an error", function () {
        expect(function () {
            countChars([]);
        }).toThrow(Error("input array is not a string"));
    });
/*
    it('countChars("any", function) should return 10', function () {
        countChars('abracadabra', function (c) { return c === 'a'; }),toBe(10);
    });

    it('countChars("abracadabra", function(c) { return c === "a"; }) should return 5', function () {
        expect(function () {
            countChars('abracadabra', function (c) { return c === 'a'; });
        }).toThrow(Error("input num is not a string"));
    });
*/
});
