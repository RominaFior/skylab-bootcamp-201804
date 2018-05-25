var fs =require('fs')

fs.readFile(process.argv[2],'utf8', (err,data)=> {
    
    if(err) throw err;

    let numberOfLines=data.split('\n')
    
    let res=numberOfLines.length-1
    console.log(res)
})
