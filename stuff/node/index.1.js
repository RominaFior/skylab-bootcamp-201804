f1()

function f1() {
    console.log('f1')
    f2()
}

function f2() {
    console.log('f2')
    f3()
    setTimeout(() => f5(), 500)
}

function f3() {
    console.log('f3')
    setTimeout(() => f4(), 1000)
}

function f4() {
    console.log('f4')
}

function f5() {
    console.log('f5')
}