const net = require('net')

const date = () => {
    const d = new Date()
      (d.getFullYear() + "-0" + (parseInt(d.getMonth()) + 1).toString() + "-" + d.getDate() + " "
    + "0" + d.getHours() + ":" + d.getMinutes()+"\n")
}
net.createServer(socket => {
    socket.write(date())
    socket.end()
}).listen(process.argv[2])