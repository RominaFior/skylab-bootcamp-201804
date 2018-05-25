// $ node chat-server.js 3000
// to test connection:
// $ curl http://localhost:3000?from=pepito&message=whatever

const http = require('http')
const fs = require('fs')

const qs = require('querystring')
// const url = require('url')
// const { URL } = require('url')

const [port, file] = process.argv.slice(2)

let messages = 'chat history:\n'

const logs = fs.createWriteStream('./server.log')

const server = http.createServer((req, res) => {
    const ip = req.connection.remoteAddress
    const log = `CONNECTION from ${ip} (${new Date()}) with params ${req.url}`
    console.log(log)
    logs.write(`${log}\n`)

    // with querystring
    const { url } = req
    const index = url.indexOf('?')
    if (index > -1) {
        const { from, message } = qs.parse(req.url.substring(index + 1))

        messages += `${from}: ${message}\n`
    }

    // with url
    // const { query: { from, message } } = url.parse(req.url, true)
    // if (from && message) {
    //     messages += `${from}: ${message}\n`
    // }

    // with URL (super chapu! porque req.url no provee la url completa, solo parte derecha /? + query string)
    // const u = new URL(`http://relleno${req.url}`) // .../?from=pepito&message=hola
    // const from = u.searchParams.get('from')
    // const message = u.searchParams.get('message')
    // if (from && message) {
    //     messages += `${from}: ${message}\n`
    // }

    res.end(messages)
})

server.listen(port, () => console.log(`server up and running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    server.close()

    logs.close()

    process.exit()
})