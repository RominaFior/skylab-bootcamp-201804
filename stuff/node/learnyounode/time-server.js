// $ node time-server.js 3000
// to test connection:
// $ nc -v localhost 3000

const net = require('net')

const port = process.argv[2]

const server = net.createServer(socket => {
    const date = new Date()
    const year = date.getFullYear()
    const month = twoDigits(date.getMonth() + 1)
    const day = twoDigits(date.getDate())
    const hours = twoDigits(date.getHours())
    const minutes = twoDigits(date.getMinutes())

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}\n`

    socket.on('error', console.error)

    socket.on('close', () => console.log('closing socket'))

    socket.end(formattedDate)
})

function twoDigits(value) {
    return value < 10 ? `0${value}` : `${value}`
}

server.listen(port, () => console.log(`server up and running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    server.close()

    process.exit()
})