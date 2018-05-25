'use strict';

// testeamos 2 casos positivos, success cases

test(function () {
    return cube(3);
},
    'cube(3) should return 27',
    function (result) {
        return result === 27;
    }
)

test(function () {
    return cube([1, 2, 3]);
},
    'cube([1, 2, 3]) should return [1, 8, 27]',
    function (result) {
        return result.toString() === [1, 8, 27].toString();
    }
)

//  below we are testing FAIL cases

test(withErrorCapturing(function () {
    cube(true);
}),
    'cube(true) should throw an error',
    function (result) {
        return result.message === 'input num is not a number, neither an array';
    }
)

test(withErrorCapturing(function () {
    cube([1, 2, 'a']);
}),
    'cube([1, 2, "a"]) should throw an error',
    function (result) {
        return result.message === 'input array is not a number at index 2';
    }
)



// function test(testCase, message, check) {
//     try {
//         var res = testCase();
//         console.log(message, check(res), res);
//     } catch (err) {
//         console.error(message, 'FAILED', err);
//     }
// }

// function runWithErrorHandling(func) {
//     return function () {
//         var error;

//         try {
//             func();
//         } catch (err) {
//             error = err;
//         }

//         return error;
//     };

// OLD

// var res = cube(3);

// console.log('cube(3) should return 27', res === 27, res);

// res = cube([1, 2, 3]);

// console.log('cube([1,2,3]) should return ([1,8,27])', res.toString() === [1, 8, 27].toString, res);

// var error;

// try {
//     cube('');
// } catch (err) {
//     error = err;
// } finally {
//     console.log("'cube('')' should thow an error", error !== undefined, error);
// }


// // REUSABILITY of code. We create a function to test so we don't have to repeat all try-catch structure.

// //pasamos function como parametro, de momento es una funcion anonima, Cube() no se ejecuta dentro, solo se declara. 'error message es el segundo parametro de la funcion
// testThrowError(function() { 
//     cube(true);
// }, 'error message'); 

// function test(testCase, message)

// function testThrowError(testCase, message) {
//     var error;
//     try {
//         testCase()
//     } catch (err) {
//         error = err;
//     } finally {
//         console.log(message, error !== undefined, error);
//     }

// }

