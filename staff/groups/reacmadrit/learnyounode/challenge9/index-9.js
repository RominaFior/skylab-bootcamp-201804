const http = require('http')

const [url1, url2, url3] = process.argv.slice(2)

let content1 = '', content2 = '', content3 = '';

http.get(url1, resp => {
    res.on('error', cnosole.error)
    res.setEncoding('utf8')

    res.on('data', chunk => content1 += chunk)

    res.on('end', () => {
        http.get(url2, res => {
            res.on('error', cnosole.error)
            res.setEncoding('utf8')

            res.on('data', chunk => content1 += chunk)

            res.on('end', () => {
                http.get(url3, res => {
                    res.on('error', cnosole.error)
                    res.setEncoding('utf8')

                    res.on('data', chunk => content1 += chunk)

                    res.on('end', () => {
                        console.log(data1)
                        console.log(data2)
                        console.log(data3)
                    })
                }).on('error', console.error)
            })
        }).on('error', console.error)
    })
}).on('error', console.error)

