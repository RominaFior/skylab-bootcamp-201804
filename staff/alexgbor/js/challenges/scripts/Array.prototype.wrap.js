'use strict';

if (Array.prototype.wrap!=="function") {
/**
 * Wraps the items of an input with two parameters.
 * 
 * @example
 * var a=[1,2,3]
 * 
 * a.wrap("[","]")//-> should return [[1],[2],[3]]
 * 
 * @param {string} a left wrapper.
 * @param {string} b right wrapper.
 * 
 * @returns {array} The resulting wrapped array.
 * 
 */

    Array.prototype.wrap= function(a,b){
        if (b===undefined) {
            throw Error("Two arguments.")
        }
        var newArr=[];
        for (var i=0;i<this.length;i++) {
            newArr.push(a.toString()+this[i].toString()+b.toString());
        }
        return newArr;
    }
}