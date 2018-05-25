const http = require('http');
const fs = require('fs');

const [port, file] = process.argv.slice(2);

http
    .createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'text/plain' });

        fs.createReadStream(file).pipe(res);
    })
    .listen(port);
