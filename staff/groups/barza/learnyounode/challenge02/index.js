'use strict';

// const [_node, _file, num1, num2] = process.argv;

const newArr = process.argv;

let sum = 0;
for (let i = 2; i < newArr.length; i++) {
    sum += parseInt(newArr[i]);
}

console.log(sum);
