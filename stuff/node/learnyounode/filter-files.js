const fs = require('fs')
const path = require('path')

const [ _path, ext ] = process.argv.slice(2)

fs.readdir(_path, (err, list) => {
    if (err) throw err

    list.forEach(file => {
        if (path.extname(file) === `.${ext}`) console.log(file)
    })
})