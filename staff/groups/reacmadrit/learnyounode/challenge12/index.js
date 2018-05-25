const fs= require('fs')
const http= require('http')
const map=require('through2-map')

var server=http.createServer((req,res)=>{
    if (req.method==='POST') {
        req.pipe(map((data)=>{
            return data.toString().toUpperCase()
        })).pipe(res)
    }
})

server.listen(process.argv[2])