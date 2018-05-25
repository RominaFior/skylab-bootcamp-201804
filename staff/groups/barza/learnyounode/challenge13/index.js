const http = require('http');
const url = require('url');

const [PORT] = process.argv.slice(2);

http
    .createServer((req, res) => {
        const { url: _url } = req;

        const {
            query: { iso },
            pathname
        } = url.parse(_url, true);

        let resp = '';

        switch (pathname) {
            case '/api/parsetime':
                resp = parseTime(iso);
                break;
            case '/api/unixtime':
                resp = toUnixTime(iso);
                break;
        }

        resp = JSON.stringify(resp);

        res.writeHead(200, { 'content-type': 'application/json' });

        res.end(resp);
    })
    .listen(PORT, () => {
        console.log(`Server listening on port ${PORT}...`);
    });

const parseTime = date => {
    const _date = new Date(date);

    return {
        hour: _date.getHours(),
        minute: _date.getMinutes(),
        second: _date.getSeconds()
    };
};

const toUnixTime = date => {
    const unixtime = parseInt(new Date(date).getTime());

    return {
        unixtime
    };
};
