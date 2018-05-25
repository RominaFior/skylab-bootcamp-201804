const http = require('http');
const url = require('url');

const [PORT] = process.argv.slice(2);

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') return res.end('ONLY GET REQUEST');

    const _url = req.url;

    // console.log(_url);

    const parsed = url.parse(_url, true);

    // console.log(parsed);

    const pathname = parsed.pathname;
    const query = parsed.query;

    if (pathname === '/api/parsetime') {
        const _date = query.iso;
        const parsedDate = new Date(_date);

        const hour = parsedDate.getHours();
        const minute = parsedDate.getMinutes();
        const second = parsedDate.getSeconds();

        const obj = {
            hour,
            minute,
            second
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.end(JSON.stringify(obj));
    } else if (pathname === '/api/unixtime') {
        const _date = query.iso;
        const parsedDate = new Date(_date);

        const obj = {
            unixtime: parsedDate.getTime()
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.end(JSON.stringify(obj));
    }
});

server.listen(PORT, () => {
    console.log(`Server is litening on port ${PORT}`);
});
