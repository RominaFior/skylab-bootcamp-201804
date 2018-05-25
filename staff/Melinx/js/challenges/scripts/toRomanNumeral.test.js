'use strict';

// create a function that converts a positive integer from 1 to 10 into its roman numeral representation (string)

var str = toRomanNumeral(2);

console.log('toRomanNumeral(2) should return II', str === "II", str);

str = toRomanNumeral(8);

console.log('toRomanNumeral(8) should return VIII', str === "VIII", str);

error = undefined;

try{
   toRomanNumeral(true);
} catch(err){
    error = err;
} finally{
    console.log('toRomanNumeral(true) should throw an error', error !== undefined, error);
}
