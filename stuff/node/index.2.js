// (function(__dirname, __filename) {
    const [ _node, _proc, n1, oper, n2 ] = process.argv

    const num1 = parseInt(n1), num2 = parseInt(n2)
    
    function sum(a, b) { return a + b }
    
    function mul(a, b) { return a * b }
    
    // global.sum = function(a, b) { return a + b }
    
    // global.mul = function(a, b) { return a * b }
    
    const res = global[oper](num1, num2)
    
    console.log(res)
// })()

