const net = require('net')  
const port= process.argv[2]

var server = net.createServer(function (socket) {  
  
    date=new Date()

    let year = date.getFullYear().toString() 
    let month = (date.getMonth()+1).toString()    
    let day = date.getDate().toString()       
    let hour = date.getHours().toString()  
    let minutes = date.getMinutes().toString() 

    if(month.length<2)month ='0' +month
    if(day.length<2)day ='0' + day
    if(hour.length<2)hour ='0' + hour
    if(minutes.length<2)minutes ='0' + minutes

    socket.write(`${year}-${month}-${day} ${hour}:${minutes}\n`)

    socket.end()

})  
server.listen(port) 



// # Aprendiendo NODE.JS!  
   
//  ## SERVIDOR DE TIEMPO (Ejercicio 10 de 13)  
   
//   ¡Crea un Servidor de tiempo y hora TCP !  
   
//   El servidor debe escuchar conexiones TCP en el puerto indicado por el  
//   primer argumento del programa. Para cada conexión debes escribir la fecha  
//   actual y la hora en formato 24hs del siguiente modo:  
   
//      "AAAA-MM-DD hh:mm"  
   
//   seguido por un carácter newline('\n'). Tanto el mes, el día como la hora y  
//   minuto deben tener un 0 para ocupar 2 espacios, por ejemplo:  
   
//      "2013-07-06 17:42"  
   
//  ─────────────────────────────────────────────────────────────────────────────  
   
//  ## PISTAS  
   
//   Para este ejercicio crearemos un servidor TCP en lugar de usar el módulo  
//   HTTP usaremos el módulo net del núcleo de Node que tiene funcionalidades  
//   de red.  
   
//   El módulo net tiene un método net.createServer() que recibe un callback. A  
//   diferencia de otros callbacks en Node, el callback createServer() se llama  
//   una vez por cada conexión entrante. La firma es la siguiente:  
   
//      function callback (socket) { /* ... */ }  
   
//   net.createServer() devuelve una variable instancia de server. Para iniciar  
//   la escucha del servicio hay que llamar a server.listen(portNumber).  
   
//   Un ejemplo de un servidor Node típico es como sigue:  
   
//      var net = require('net')  
//      var server = net.createServer(function (socket) {  
//        // manejo del socket  
//      })  
//      server.listen(8000)  
   
//   Recuerda usar el puerto recibido por argumento.  
   
//   El objeto socket contiene información sobre la conexión y es un Stream  
//   duplex, es decir que se puede escribir y leer a la vez.  
   
//   Puedes usar socket.write(data) para escribir en el socket y luego  
//   socket.end() para cerrar el socket. Alternativamente, el método end()  
//   puede recibir un objeto de datos socket.end(data).  
   
//   La documentación del módulo net puede verse en:  
   
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/net.html  
   
//   Para calcular la fecha puedes usar new Date() y luego llamar a algunos  
//   métodos específicos:  
   
//      date.getFullYear()  
//      date.getMonth()     // empieza en 0  
//      date.getDate()      // devuelve día del mes, empieza en 1  
//      date.getHours()  
//      date.getMinutes()  
   
//   Otra opción más intrépida es usar el paquete strftime disponible en npm.  
//   La función strftime(formato, fecha) recibe un formato de fecha similar al  
//   date de UNIX. Más información de strftime en:  
//   (https://github.com/samsonjs/strftime)  
   

//   var net = require('net')
    
//   function zeroFill (i) {
//     return (i < 10 ? '0' : '') + i
//   }
  
//   function now () {
//     var d = new Date()
//     return d.getFullYear() + '-' +
//       zeroFill(d.getMonth() + 1) + '-' +
//       zeroFill(d.getDate()) + ' ' +
//       zeroFill(d.getHours()) + ':' +
//       zeroFill(d.getMinutes())
//   }
  
//   var server = net.createServer(function (socket) {
//     socket.end(now() + '\n')
//   })
  
//   server.listen(Number(process.argv[2]))