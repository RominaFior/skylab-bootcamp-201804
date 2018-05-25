var mymodule = require('./module-excercise6')

mymodule(process.argv[2], process.argv[3], function(err, files) {
  
  if(err) throw err

  files.forEach(file => { console.log(file) })

  });