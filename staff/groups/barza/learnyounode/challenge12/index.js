// https://www.npmjs.com/package/stream-transform

const http = require('http');
const map = require('through2-map');

const [PORT] = process.argv.slice(2);

const server = http
    .createServer((req, res) => {
        const { method } = req;

        if (method !== 'POST') res.end('only POST requests!');

        req.setEncoding('utf8');
        res.setHeader('content-type', 'text/html');

        req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
    })
    .listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}...`);
    });
