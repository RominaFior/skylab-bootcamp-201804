const http = require('http');

const URL = process.argv[2];

http.get(URL, response => {
    response.setEncoding('utf8');

    let resData = '';
    response.on('data', data => {
        resData += data + '\n';
    });

    response.on('error', err => {
        console.log(err);
    });

    response
        .on('end', () => {
            console.log(resData);
        })
        .on('error', err => {
            console.log(err);
        });
});
