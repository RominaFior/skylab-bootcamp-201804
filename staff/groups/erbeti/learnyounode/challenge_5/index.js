
var fs = require('fs') 
var path= require('path')
let file = process.argv[2]
let ext= process.argv[3]

  
  let text=fs.readdir(file, function(error,list){
    
      if (error=== null){
          for (let i=0; i<list.length; i++ ){

              if(path.extname(list[i])===`.${ext}`){
                
                console.log(list[i])
            }
        }
         
      }
    
  })


//   # Aprendiendo NODE.JS!  
   
//  ## LS FILTRADO (Ejercicio 5 de 13)  
   
//   Crea un programa que dado un directorio imprima una lista de archivos  
//   filtrados por la extensión. El primer argumento será la ruta al directorio  
//   (ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si  
//   recibes 'txt' deberás filtrar todos los archivos que terminen en .txt.  
   
//   Nota: el segundo argumento no incluye el punto '.'.  
   
//   La lista de archivos a imprimir en consola debe hacerse un archivo por  
//   línea y debes utilizar Async I/O.  
   
//  ─────────────────────────────────────────────────────────────────────────────  
   
//  ## PISTAS  
   
//   La función fs.readdir() recibe como parámetros: una ruta(path) y un  
//   callback. La firma del callback es:  
   
//      function callback (error, lista) { /* ... */ }  
   
//   La lista es un arreglo de nombres de archivos de tipo String.  
   
//   La documentación del módulo fs puede verse en:  
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html  
   
//   Además, el módulo path puede resultar útil, especialmente la función  
//   extname.  
   
//   La documentación del módulo path puede verse en:  
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html  
   
//  ──────────────────────────────────────────────────



//  var fs = require('fs')
//  var path = require('path')
 
//  var folder = process.argv[2]
//  var ext = '.' + process.argv[3]
 
//  fs.readdir(folder, function (err, files) {
//    if (err) return console.error(err)
//    files.forEach(function (file) {
//      if (path.extname(file) === ext) {
//        console.log(file)
//      }
//    })
//  })
