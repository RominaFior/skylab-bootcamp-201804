const http = require('http')

const urlist = process.argv.slice(2)


function urlReader(urlist){
    let urlresp=[]
    let contador=0
    for(let i=0; i<urlist.length;i++){

        http.get(urlist[i], res => {
            res.on('error', console.error)

            res.setEncoding('utf8')

            let content = ''

            res.on('data', chunk => content += chunk)

            res.on('end', () => {
                urlresp[i]=content
                contador ++
                printer(contador, urlresp)

            })
        })

    }
}


function printer(contador, list){

    if (contador===3){
        list.forEach(response=>console.log(response))
        
    }

}

urlReader(urlist)


// # Aprendiendo NODE.JS!  
   
// ## MALABARES CON ASINCRONISMO (Ejercicio 9 de 13)  
  
//  Este ejercicio es similar al anterior puesto que debes usar http.get().  
//  Sin embargo, esta vez tu programa recibirá tres URLs como argumentos.  
  
//  Tu programa deberá imprimir el contenido de cada una de las URLs en  
//  consola en el mismo orden que fueron recibidos los argumentos. No deberás  
//  imprimir el largo, solo el contenido como String, pero debes respetar el  
//  orden de llegada de los argumentos.  
  
// ─────────────────────────────────────────────────────────────────────────────  
  
// ## PISTAS  
  
//  Como las llamadas a las URLs son asíncronas, es probable que no recibas  
//  las respuestas en orden por lo que no puedes imprimir las respuestas a  
//  medida que llegan.  
  
//  Tendrás que encolar los resultados y mantener un contador de cuántas  
//  peticiones han sido recibidas de modo que al llegar al final puedas  
//  imprimir los resultados.  
  
//  En la vida real, hay varias librerías como  
//  [async](https://npmjs.com/async) y [after](https://npmjs.com/after) que  
//  facilitan la continuación de los callbacks. Para el alcance de este  
//  ejercicio no es necesario usar librerías externas.  
  

//  var http = require('http')
//  var bl = require('bl')
//  var results = []
//  var count = 0
 
//  function printResults () {
//    for (var i = 0; i < 3; i++) {
//      console.log(results[i])
//    }
//  }
 
//  function httpGet (index) {
//    http.get(process.argv[2 + index], function (response) {
//      response.pipe(bl(function (err, data) {
//        if (err) {
//          return console.error(err)
//        }
 
//        results[index] = data.toString()
//        count++
 
//        if (count === 3) {
//          printResults()
//        }
//      }))
//    })
//  }
 
//  for (var i = 0; i < 3; i++) {
//    httpGet(i)
//  }

