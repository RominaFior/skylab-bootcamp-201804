const http = require('http')

const urls = process.argv.slice(2)

const contents = urls.map(() => '')
let finishes = 0

// $ node juggling-async-2.0.0.js http://google.com http://google.es http://google.co.uk http://google.it http://google.fr

for (let i = 0; i < contents.length; i++) {
    http.get(urls[i], res => {
        res.on('error', console.error)

        res.setEncoding('utf8')

        res.on('data', chunk => contents[i] += chunk)

        res.on('end', () => {
            console.log(`resp ${i + 1}`)
            
            finishes++

            if (finishes === contents.length) contents.forEach(content => console.log(content))
        })
    }).on('error', console.error)
}