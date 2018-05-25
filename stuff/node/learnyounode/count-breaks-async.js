const fs = require('fs')

const path = process.argv[2]

fs.readFile(path, 'utf8', (err, content) => {
    if (err) throw err

    console.log(content.split('\n').length - 1)
})

console.log('continue')
