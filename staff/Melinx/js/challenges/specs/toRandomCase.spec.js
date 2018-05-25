'use strict';
 
describe('toRandomCase', function () { 

    it('should return input in toRandomCase(str)..'),
    function () {
        expect(input.toLowerCase()).toBe(output.toLowerCase());
        expect(input).not.toBe(output);
    };

   it('should throw an error on toRandomCase(333)', function () {
    expect(function () {
        toRandomCase(333);
    }).toThrowError('str should be a string');
 });

});