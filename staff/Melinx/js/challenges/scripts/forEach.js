'use strict';


function forEach(arr, handler) { // hander seria como console.log, el elemento propio de las HOF q hace q la func se recorra a si misma
	var newArr = [];
	var iterate = function (index) {
		// recursive iteration on handler parameter below
		handler(arr[index], index, arr)
		newArr.push(arr[index], index, arr);
		if (++index != arr.length) {
			arr[0] = "pepe"
			iterate(index);
		}
		return newArr;

	};
	iterate(0);
	//console.log(newArr)

}


