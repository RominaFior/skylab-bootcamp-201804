'use strict';

describe('toCamelCase', function() {
    it('should return "helloWorld" on toCamelCase("Hello World")', function() {
        expect(toCamelCase("Hello World")).toBe("helloWorld");
    });

    it('should throw an error on toCamelCase(5)', function() {
        expect(function() {
            toCamelCase(5);
        }).toThrow(Error("Enter a string."));
    });
});