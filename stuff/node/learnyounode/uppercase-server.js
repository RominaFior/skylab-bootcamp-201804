const http = require('http')
//const stream = require('stream')
const through2 = require('through2-map')

const port = process.argv[2]

const server = http.createServer((req, res) => {
    //console.log(req instanceof stream.Readable, res instanceof stream.Writable)

    const { method } = req

    if (method === 'POST') {
        // raw way
        // let content = ''
        // req.on('data', chunk => content += chunk)
        // req.on('end', () => res.end(content.toUpperCase()))

        // through2
        req.pipe(through2(raw => raw.toString().toUpperCase())).pipe(res)
    }

})

server.listen(port, () => console.log(`server up and running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    server.close()

    process.exit()
})
