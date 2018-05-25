var fs = require('fs') 

let file = process.argv[2]

let text=fs.readFile(file, 'utf8',  function(error,data){

    if (error=== null){
        console.log((data.split('\n').length-1)) 
    }
})


// # Aprendiendo NODE.JS!  
   
//  ## MI PRIMER I/O ASINCRÓNICO! (Ejercicio 4 de 13)  
   
//   Escribe un programa que use operación de sistema de archivos asíncrona  
//   para leer un archivo e imprimir en consola el número de saltos de línea  
//   ('\n') que contiene. Similar a  ejecutar cat file | wc -l.  
   
//   El programa recibirá la ruta al archivo como único argumento.  
   
//  ─────────────────────────────────────────────────────────────────────────────  
   
//  # PISTAS  
   
//   La resolución es similar al problema anterior pero esta vez usaremos the  
//   Node.js way: asíncronicamente (async).  
   
//   Vamos a sustituir fs.readFileSync() por fs.readFile() y en lugar de  
//   esperar que retorne un valor, vamos a tener que procesar el resultado con  
//   una función de callback que se invoca al terminar la lectura del archivo.  
   
//   La forma habitual de usar callbacks en Node.js es con la siguiente firma:  
   
//      function callback (error, data) { /* ... */ }  
   
//   Puedes validar si ocurrió un error controlando si el primer parámetro es  
//   nulo. Si no hay errores, 'data' será un objeto Buffer de Node.js. Al igual  
//   que pasa con readFileSync(), puedes pasar 'utf8' como segundo parámetro y  
//   luego el callback como tercero de modo de que data sea un String y no un  
//   Buffer.  
   
//   Puedes leer la documentación del módulo fs en:  
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html  
  

//   var fs = require('fs')
//   var file = process.argv[2]
  
//   fs.readFile(file, function (err, contents) {
//     if (err) {
//       return console.log(err)
//     }
//     // fs.readFile(file, 'utf8', callback) también se puede utilizar
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
//   })