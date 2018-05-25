const http = require('http');

const URL = process.argv[2];

http.get(URL, response => {
    response.setEncoding('utf8');

    let chunkData = '';
    response
        .on('data', data => {
            chunkData += data;
        })
        .on('error', err => {
            console.log(err.message);
        });

    response
        .on('end', () => {
            console.log(chunkData.length);
            console.log(chunkData);
        })
        .on('error', err => {
            console.log(err.message);
        });
});
