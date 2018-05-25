const http = require('http')
let data=''

const [url, port, from, message] = process.argv.slice(2)

http.get(`http://${url}:${port}/?from=${from}&message=${message}`, (res) => {
    res.setEncoding('utf8')
    res.on('data',chunk => data+=chunk)
    res.on('end', () => {
        console.log(data)
    })

}).on('error', console.error)