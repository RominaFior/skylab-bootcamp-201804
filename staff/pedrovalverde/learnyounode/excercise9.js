/* const http = require('http')

let results = []
let count = 0

function getData(n){
    http.get(process.argv[2 + n], (res) =>{

        let str = ''

        res.setEncoding('utf8')
        res.on("data", (data) => {str += data})
        res.on("end", (data) => {
            results[n] = str
            count++
            printResults()
        })
    })
}

function printResults(){
    if (count === 3) {
        for (let i = 0; i<3; i++){
            console.log(results[i])
        }
    }
}

for (let i=0; i<3; i++){
    getData(i)
} */


// FROM LEARNYOUNODE SOLUTION :

var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }