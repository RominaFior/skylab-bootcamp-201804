const res = process.argv.slice(2).map(v => parseFloat(v)).reduce((accum, v) => accum + v)

console.log(res)