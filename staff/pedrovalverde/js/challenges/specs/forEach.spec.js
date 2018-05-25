'use strict';

describe ('forEach', function(){
    var input = [1,2,3];
    var output = [];

    it('should fulfill output  with imput values', function(){
        forEach(input, function(v){output.push(v)});

        //expect (input.length).toBe(output.length);
        expect(input).toEqual(output);
    });

    it('should throw error when no arguments', function(){
        
    });






});