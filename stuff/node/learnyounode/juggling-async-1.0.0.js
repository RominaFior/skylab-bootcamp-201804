const http = require('http')

const [url1, url2, url3] = process.argv.slice(2)

let content1 = '', content2 = '', content3 = ''

// $ node juggling-async-1.0.0.js http://google.com http://google.es http://google.co.uk

http.get(url1, res => {
    res.on('error', console.error)

    res.setEncoding('utf8')

    res.on('data', chunk => content1 += chunk)

    res.on('end', () => {
        console.log('resp 1')

        http.get(url2, res => {
            res.on('error', console.error)

            res.setEncoding('utf8')

            res.on('data', chunk => content2 += chunk)

            res.on('end', () => {
                console.log('resp 2')

                http.get(url3, res => {
                    res.on('error', console.error)

                    res.setEncoding('utf8')

                    res.on('data', chunk => content3 += chunk)

                    res.on('end', () => {
                        console.log('resp 3')

                        console.log(content1)
                        console.log(content2)
                        console.log(content3)
                    })
                }).on('error', console.error)
            })
        }).on('error', console.error)
    })
}).on('error', console.error)