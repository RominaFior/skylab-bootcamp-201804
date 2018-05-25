const net = require('net');

function twoDigits(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
  let d = new Date();
  let formatedDate = d.getFullYear() + "-"
    + twoDigits(d.getMonth() + 1) + "-"
    + twoDigits(d.getDate()) + " "
    + twoDigits(d.getHours()) + ":"
    + twoDigits(d.getMinutes()) + "\n";
  socket.end(formatedDate);
});
server.listen(process.argv[2], () => console.log("server active"));


// FROM LEARNYOUNODE SOLUTION :

/* var net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2])) */