
// reduce
// create a function that works as Array.prototype.reduce()

// demos:

// var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];

// reduce(a, function(accum, v) {
// if (v.price > 10)
// return accum + v.price;
// return accum

// from Zeke, below:




// from Marina, below:

function reduce(accum, v){
    
}

function reduce(arr, handler, id){
    if (!Array.isArray(arr)) throw Error("Write a valid array on input.");
    var counter = id;
    for (var i = 0; i < arr.length; i++){
        counter += handler(id, arr[i]);
    }
    return counter;
}
var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, 
{ name: 'socks', price: 19.99 }];
var _reduce = reduce(a, function(accum, v) {
    if (v.price > 10) return accum + v.price; 
    return accum;
    }, 0); 
console.log("The sum of the prices expensiver than 10 is: ", _reduce);