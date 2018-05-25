const nums = []
for (var i = 2; i < process.argv.length; i++) {
    nums.push(process.argv[i])
}
let res = nums.reduce((accum, v) => parseInt(accum) + parseInt(v))

console.log(res)