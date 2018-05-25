var fs = require('fs')

fs.readdir(process.argv[2],(err,list)=>{
    if (err) throw err;

    let res=list.filter(v=> v.substr(-3)==='.md')

    res.forEach(v=>console.log(v))
})