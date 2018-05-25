'use strict';


error = undefined;

try{
    count=toRandomCase(true);
} catch(err){
    error = err;
} finally{
    console.log('toRandomCase(true) should throw an error', error !== undefined, error);
}

var input = "Hello My World";
var output = toRandomCase(input);


console.log('toRandomCase(str) should return input in random case', input.toLowerCase () === output.toLowerCase() && input !== output)