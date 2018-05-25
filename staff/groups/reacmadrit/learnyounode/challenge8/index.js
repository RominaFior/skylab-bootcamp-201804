const http = require('http')
let data=''

http.get(process.argv[2],(res)=>{
    res.setEncoding('utf8')
    res.on('data', (str)=> {
        data+=str
    })
    res.on('error',console.error)
    res.on('end',()=> {
        console.log(data.length)
        console.log(data)
    })
}).on('error',console.error)