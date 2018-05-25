const http = require('http');
const url = require('url');

const PORT = 3000;

let messages = 'Chat history\n';

const server = http.createServer((req, res) => {
    const { query: { from, message } } = url.parse(req.url, true);

    if (from && message) {
        messages += `${from}: ${message}\n`;
    }

    res.end(messages);
});

server.listen(PORT, () => {
    console.log('server listening on port: ', PORT);
});
