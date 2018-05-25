'use strict';

const fs = require('fs');

const file = process.argv[2];

const res =
    fs
        .readFileSync(file)
        .toString()
        .split('\n').length - 1;

console.log(res);
