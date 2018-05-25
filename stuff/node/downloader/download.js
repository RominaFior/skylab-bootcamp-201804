// $ node download.js <url> <file>
// $ node download.js https://upload.wikimedia.org/wikipedia/commons/7/7a/Salzburg_from_Gaisberg_big_version.jpg image.jpg

const https = require('https')
const fs = require('fs')

const [url, file] = process.argv.slice(2)

const ws = fs.createWriteStream(file)

https.get(url, res => {
    res.on('error', console.error)

    // without piping
    // res.on('data', chunk => ws.write(chunk))
    // res.on('end', () => ws.end())

    // piping
    res.pipe(ws)
}).on('error', console.error)