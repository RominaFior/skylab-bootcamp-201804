'use strict';

function toRomanNumeral(num){

    if(typeof num !== 'number') throw Error('the input num should be a number');
    if(num > 10) throw Error('sorry, the input num should be a number between 1 and 10');

    var dictionary = {1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8: "VIII", 9:"IX", 10:"X"}
        for (var index in dictionary) {   
           if(index == num){
				return dictionary[index]
			}
        }

}


