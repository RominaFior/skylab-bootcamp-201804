const http = require('http')
let data1=''
let data2=''
let data3=''

http.get(process.argv[2],(res)=>{
    res.setEncoding('utf8')
    res.on('data', (str)=> {
        data1+=str
    })
    res.on('error',console.error)
    res.on('end',()=> {
        http.get(process.argv[3],(res)=>{
            res.setEncoding('utf8')
            res.on('data', (str)=> {
                data2+=str
            })
            res.on('error',console.error)
            res.on('end',()=> {
                http.get(process.argv[4],(res)=>{
                    res.setEncoding('utf8')
                    res.on('data', (str)=> {
                        data3+=str
                    })
                    res.on('error',console.error)
                    res.on('end',()=> {
                        console.log(data1)
                        console.log(data2)
                        console.log(data3)
                    })
                }).on('error',console.error)
            })
        }).on('error',console.error)
    })
}).on('error',console.error)