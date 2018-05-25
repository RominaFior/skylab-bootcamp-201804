'use strict';

const fs = require('fs');

const file = process.argv[2];

fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw Error(err.message);

    const res = data.split('\n').length - 1;

    console.log(res);
});
