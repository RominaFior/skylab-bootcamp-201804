'use strict';
 
describe('find', function () { 

    it("should return 'jack' on find(['john', 'mary', 'jack'], function(v) { return v.indexOf('c') > -1; })",
    function () {
        expect(find(['john', 'mary', 'jack'], function(v) { return v.indexOf('c') > -1; })).toBe('jack')
    });


    it("should return 'mary' on find(['john', 'mary', 'jack'], function(v) { return v.indexOf('m') > -1; })",
    function () {
        expect(find(['john', 'mary', 'jack'], function(v) { return v.indexOf('m') > -1; })).toBe('mary')
    });
   
   it('should throw an error on find(true)', function () {
       expect(function () {
           find(true);
       }).toThrow(Error('Input arr should be an array'));
   })
   
   it('should throw an error on find(1)', function () {
       expect(function () {
           find(1);
       }).toThrow(Error('Input arr should be an array'));
   });
   


});