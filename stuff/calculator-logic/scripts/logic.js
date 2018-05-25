'use strict'

class Calculator {
    constructor() {
        this._history = []
        this._status = 0
    }

    _push(key) {
        if (typeof key !== 'number') {
            this._pushSymbol(key)
        } else {
            this._pushNumber(key)
        }

        this._updateStatus()
    }

    _pushSymbol(symbol) {
        if (symbol === '+/-') {
            const last = this._history[this._history.length - 1]

            this._history[this._history.length - 1] = -last
        } else
            this._history.push(symbol)
    }

    _pushNumber(number) {
        const last = this._history[this._history.length - 1]

            if (typeof last === 'number')
                this._history[this._history.length - 1] = last * 10 + number
            else
                this._history.push(number)
    }

    _updateStatus() {
        const last = this._history[this._history.length - 1]

        if (typeof last === 'number') 
            this._status = last
        else {
            this._status = this.result()
        }
    }

    zero() {
        this._push(0)
    }
    one() {
        this._push(1)
    }
    two() {
        this._push(2)
    }
    three() {
        this._push(3)
    }
    four() {
        this._push(4)
    }
    five() {
        this._push(5)
    }
    six() {
        this._push(6)
    }
    seven() {
        this._push(7)
    }
    eight() {
        this._push(8)
    }
    nine() {
        this._push(9)
    }

    sum() {
        this._push('+')
    }
    sub() {
        this._push('-')
    }
    mul() {
        this._push('*')
    }
    div() {
        this._push('/')
    }
    negate() {
        this._push('+/-')
    }

    status() {
        return this._status
    }

    result() {
        let accum = this._history[0]

        for (let i = 1; i < this._history.length - 1; i++) {
            const val = this._history[i]

            if (typeof val !== 'number') {
                switch (val) {
                    case '+':
                        accum += this._history[i + 1]
                        break
                    case '-':
                        accum -= this._history[i + 1]
                        break
                    case '*':
                        accum *= this._history[i + 1]
                        break
                    case '/':
                        accum /= this._history[i + 1]
                        break
                }
            }
        }

        this._status = accum

        return accum
    }
}