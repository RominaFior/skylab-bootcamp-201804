var fs = require('fs')
var path = require('path')

function luisAlberto (dir,ext,callback) {
    fs.readdir(dir,(err,list)=>{
        if (err) return callback(err);
        let res=list.filter(v=>path.extname(v)==='.'+ext)
        return callback(null,res)
    })
}

module.exports=luisAlberto