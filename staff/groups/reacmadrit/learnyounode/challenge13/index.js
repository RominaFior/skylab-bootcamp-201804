const http = require('http')
const url = require('url')
const path1 = '/api/parsetime'
const path2 = '/api/unixtime'

var server = http.createServer((req, res) => {
    let objUrl = url.parse(req.url, true)
    let objPathname = objUrl.pathname
    let date = objUrl.query.iso
    let newDate = new Date(Date.parse(date))
    let reply
    if (req.method === 'GET') {
        objPathname === path1 ? reply = { hour: newDate.getHours(), minute: newDate.getMinutes(), second: newDate.getSeconds() } : objPathname === path2 ? reply = { unixtime: Date.parse(date) } : reply = undefined
    }
    if (reply) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(reply))
    }
    else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(process.argv[2])