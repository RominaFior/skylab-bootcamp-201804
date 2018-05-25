'use strict';

describe('toRandomCase', function () {
    it('should return text in random case',
        function () {
            var input = 'Hello World';
            var output = toRandomCase(toRandomCase(toRandomCase(input)));

            expect(input.toLowerCase()).toBe(output.toLowerCase());
            expect(input).not.toBe(output);
        });

    it('should throw an error on not valid input', function () {
        expect(function () {
            toRandomCase(1);
        }).toThrowError('input is not a string');
    });

});
