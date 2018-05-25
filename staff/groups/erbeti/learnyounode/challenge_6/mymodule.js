

const fs = require('fs') 
const route= require('path')


module.exports = function (path, ext, callback){

    fs.readdir(path, function(error,list){
      if (error=== null){
        let arr=[]
        for (let i=0; i<list.length; i++ ){
                if(route.extname(list[i])===`.${ext}`){
                arr.push(list[i])
            }}
        return callback(error, arr)
        
    }else{
        return callback(error)
    
  }
    })
}

