// $ node chat-client.js 192.168.0.42 3000 pepito 'hola mundo'

const http = require('http')
// const cs = require('concat-stream')
const bl = require('bl')

const [host, port, from, message] = process.argv.slice(2)

http.get(`http://${host}:${port}?from=${from}&message=${message}`, res => {
    res.on('error', console.error)

    res.setEncoding('utf8')

    // without concat-stream
    // let content = ''
    // res.on('data', chunk => content += chunk)
    // res.on('end', () => console.log(content))

    // with concat-stream
    // res.pipe(cs(console.log))

    // with buffer-list
    res.pipe(bl((err, buffer) => {
        if (err) return console.error(err)

        console.log(buffer.toString())
    }))
}).on('error', console.error)
