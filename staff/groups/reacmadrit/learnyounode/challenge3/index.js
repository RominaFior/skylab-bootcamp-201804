var fs =require('fs')

let o = fs.readFileSync(process.argv[2]).toString()

let numberOfLines=o.split('\n')

let res=numberOfLines.length-1
console.log(res)