const filterFilesByExt = require('./filter-files-by-extension')

const [ _path, ext ] = process.argv.slice(2)

// filterFilesByExt(_path, ext, (err, files) => {
//     if (err) return console.error(err)

//     files.forEach(v => console.log(v))
// })

// es5
filterFilesByExt(_path, ext, function(err, files) {
    if (err) return console.error(err)

    files.forEach(function (v) { console.log(v) })
})