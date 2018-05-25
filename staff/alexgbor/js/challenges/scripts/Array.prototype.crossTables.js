'use strict';

if (Array.prototype.crossTables!=='function') {
    /**
     * Returns an array of four arrays. Each of them contains the common numbers between every combination of 2/3 arrays in the input.
     * 
     * @example
     *
     * [[5,3,7,0,6],[1,4,6,7,1],[2,9,0,6,4]].crossTables() //  ->  
     * A&B share number(s): 7,6.  
     * B&C share number(s): 4, 6. 
     * A&C share number(s): 0, 6.
     * A&B&C share number(s): 6.
     *
     *@returns {array} An array of 4 arrays. One for every pair of input arrays (or all of them at once).
     */
    Array.prototype.crossTables=function() {
        var filteredAB=[];
        var filteredBC=[];
        var filteredAC=[];
        var filteredABC=[];

        for (var i=0;i<10;i++) {
            if (isInArray(i,this[0]) && isInArray(i,this[1])) {
                if (isInArray(i,filteredAB)===false) {
                    filteredAB.push(i);
                }
            };

            if (isInArray(i,this[1]) && isInArray(i,this[2])) {
                if (isInArray(i,filteredBC)===false) {
                    filteredBC.push(i);
                }
            };

            if (isInArray(i,this[0]) && isInArray(i,this[2])) {
                if (isInArray(i,filteredAC)===false) {
                    filteredAC.push(i);
                }
            };

            if (isInArray(i,this[0]) && isInArray(i,this[1]) && isInArray(i,this[2])) {
                if (isInArray(i,filteredABC)===false) {
                    filteredABC.push(i);
                }
            };
        };
        console.log('A&B share the following numbers: '+filteredAB.join(","));
        console.log('B&C share the following numbers: '+filteredBC.join(","));
        console.log('A&C share the following numbers: '+filteredAC.join(","));
        console.log('A&B&C share the following numbers: '+filteredABC.join(","));

        return [filteredAB,filteredBC,filteredAC,filteredABC];
    }
}
/**
 * Returns an array of 3 arrays, each of them containing 5 random integers between 0 and 9 (included).
 * 
 * @example 
 * 
 * createRandom() //-> should return [[5,3,7,0,6],[1,4,6,7,1],[2,9,0,6,4]].
 * 
 * @returns {array} The array of three arrays.
 */
function createRandom() {
    var totalArray=[[],[],[]];
    for (var i=0;i<totalArray.length;i++) {
        for (var j=0;j<5;j++) {
            totalArray[i].push(Math.round(9*Math.random()));
        }
    }
    return totalArray;
}

/**
 * Returns a boolean indicating if a parameter is in a specific array.
 * 
 * @example
 * 
 * isInArray(1,[1,1,2,3,4]); //-> Should return true.
 * isInArray("a",[1,1,2,3,4]); //-> Should return false.
 * 
 * @param {*} cond The element to filter in the array.
 * @param {array} arr The array to search in.
 * 
 * @returns {boolean} True if the condition is in the array, false otherwise.
 * }
 */
function isInArray(cond,arr) {
    return arr.indexOf(cond) > -1;
}

/*
var input=createRandom();
console.log(input);
input.crossTables();
*/