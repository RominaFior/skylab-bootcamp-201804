'use strict';
 
describe('toRomanNumeral', function () { 

    it("should return II on toRomanNumeral(2)",
    function () {
        expect(toRomanNumeral(2)).toBe('II')
    });

   it('should throw an error on toRomanNumeral(true)', function () {
       expect(function () {
           toRomanNumeral(true);
       }).toThrowError('the input num should be a number');
   })
   
   it('should throw an error on toRomanNumeral(11)', function () {
       expect(function () {
           toRomanNumeral(11);
       }).toThrowError('sorry, the input num should be a number between 1 and 10');
   });

});