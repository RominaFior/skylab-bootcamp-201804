// http://localhost:3000/api/parsetime?iso=2013-08-10T14:15:16.474Z
// {"hour":16,"minute":15,"second":16}

// http://localhost:3000/api/parsetime?iso=2013-08-10T14:15:16.474
// {"hour":14,"minute":15,"second":16}

const http = require('http')
const url = require('url')

const port = process.argv[2]

const server = http.createServer((req, res) => {
    const { method, url: _url } = req

    if (method === 'GET') {
        const { pathname, query: { iso } } = url.parse(_url, true)

        if (pathname === '/api/parsetime') {
            const date = new Date(iso)

            const ret = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }

            res.writeHead(200, { 'content-type': 'application/json' })
            res.end(JSON.stringify(ret))
        } else if (pathname === '/api/unixtime') {
            res.writeHead(200, { 'content-type': 'application/json' })

            res.end(JSON.stringify({
                unixtime: new Date(iso).getTime()
            }))
        } else res.end(`cannot ${pathname}`)

    } else res.end(`cannot ${method}`)
})

server.listen(port, () => console.log(`server up and running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    server.close()

    process.exit()
})