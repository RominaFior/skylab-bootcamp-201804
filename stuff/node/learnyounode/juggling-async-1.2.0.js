const http = require('http')

const urls = process.argv.slice(2)

const contents = []

// $ node juggling-async-1.2.0.js http://google.com http://google.es http://google.co.uk http://google.it http://google.fr

function get(urls) {
    if (urls.length)
        http.get(urls[0], res => {
            res.on('error', console.error)

            res.setEncoding('utf8')

            let content = ''

            res.on('data', chunk => content += chunk)

            res.on('end', () => {
                contents.push(content)

                get(urls.slice(1))
            })
        }).on('error', console.error)
    else contents.forEach(content => console.log(content))
}

get(urls)