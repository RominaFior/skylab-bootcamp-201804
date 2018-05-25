var luisAlberto=require('./module.js')

luisAlberto(process.argv[2],process.argv[3],(err,data)=>{
    if (err) throw err;
    data.forEach(v=>console.log(v))
})