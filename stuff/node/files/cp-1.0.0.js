// $ node cp.js holamundo.txt helloworld.txt

// $ mkfile 100M dummy.file (for creating big dummy files)
// $ node cp.js dummy.file tonto.file

const fs = require('fs')
const memoryUsage = require('./memory-usage')

const memStart = memoryUsage()
let memRead, memWrite

const [from, to] = process.argv.slice(2)

fs.readFile(from, 'utf8', (err, content) => {
    if (err) return console.error(err)

    //console.log(content)

    memRead = memoryUsage()

    fs.writeFile(to, content, { encoding: 'utf8' }, err => {
        if (err) console.error(err)

        memWrite = memoryUsage()

        console.log(memRead - memStart, memWrite - memStart)
    })
})


