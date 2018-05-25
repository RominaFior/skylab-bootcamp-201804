'use strict'


class Calculator {
    constructor() {
        this._history = []
    }

    one() { this._history.push(1) }
    two() { this._history.push(2) }
    three() { this._history.push(3) }
    four() { this._history.push(4) }
    five() { this._history.push(5) }
    six() { this._history.push(6) }
    seven() { this._history.push(7) }
    eight() { this._history.push(8) }
    nine() { this._history.push(9) }
    zero() { this._history.push(0) }

    sum() { return this._history.push('+') }

    sub() { return this._history.push('-') }

    mul() { return this._history.push('*') }

    div() { return this._history.push('/') }

    status() {

        let last = this._history[this._history.length - 1]

        if (typeof last === 'number') return last

        else this.result()
        
    }

    result() {

        let accum = 0

        for (let i = 1; i < this._history.length; i++) {

            const val = this._history

            if (typeof val !== 'number') {

                switch (this._history) {

                    case '+': accum += this._history[i + 1]
                        break

                    case '-': accum -= this._history[i + 1]
                        break

                    case '*': accum *= this._history[i + 1]
                        break

                    case '/': accum /= this._history[i + 1]

                }
            }
        }
        this._history = accum
        return accum
    }
}

calc = new Calculator()

/*
codigo de pruebas manuales en el navegador
calc = new Calculator()
calc.one()
calc.sum()
calc.two()
calc.sum()
calc.four()
calc.sub()
calc.five()
calc.sum()
calc.eight()
calc.mul()
calc.two()
calc.div()
calc.four()
//calc.sum()
console.log(calc.status(), calc.result(), calc.status())
*/