const http = require('http')

const urls = process.argv.slice(2)

const contents = urls.map(() => '')

// $ node juggling-async-1.1.0.js http://google.com http://google.es http://google.co.uk http://google.it http://google.fr

function get(url, index = 0) {
    if (index !== urls.length)
        http.get(url, res => {
            res.on('error', console.error)

            res.setEncoding('utf8')

            res.on('data', chunk => contents[index] += chunk)

            res.on('end', () => {
                console.log(`resp ${index + 1}`)

                index++

                get(urls[index], index)
            })
        }).on('error', console.error)
    else contents.forEach(content => console.log(content))
}

get(urls[0])