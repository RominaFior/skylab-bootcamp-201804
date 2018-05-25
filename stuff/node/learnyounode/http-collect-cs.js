const http = require('http')
const cs = require('concat-stream')

const url = process.argv[2]

http.get(url, res => {
    res.on('error', console.error)

    res.setEncoding('utf8')

    res.pipe(cs(content => {
        console.log(content.length)

        console.log(content)
    }))
})