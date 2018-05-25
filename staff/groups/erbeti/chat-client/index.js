//node chat-cient.js pepito mensaje y mostrar historial por consola
const http = require('http')
//const url = "http://192.168.0.42:3000/"
const [host, port, user,message] = process.argv.slice(2)
http.get(`http://${host}:${port}/?from=${user}&message=${message}`, res => {
    res.setEncoding('utf8')
    res.on('error', console.error)
    let datos = ''
    res.on('data', resp => datos += resp)
    res.on('end', res => console.log(datos))
})