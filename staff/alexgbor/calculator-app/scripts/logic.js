'use strict'

class Calculator {
    constructor() {
        this._status = 0
        this.longNumber = []
        this.numbers = []
        this._count = 0;
        this._operation = ''
    }
    concatNum(num) {
        this._status = parseInt(this.longNumber[0].toString() + `${num}`)
        this.longNumber[0] = this._status
        return this.status()
    }
    one() {
        const num = 1

        if (!this._operation && this.longNumber.length !== 0) {
            this.concatNum(num)
        }

        this._status = num
        this.longNumber.push(this._status)
        return this.status()
    }
    two() {
        const num = 2

        if (!this._operation && this.longNumber.length !== 0) {
            this.concatNum(num)
        }

        this._status = num
        this.longNumber.push(this._status)
        return this.status()
    }
    three() {
        const num = 3

        if (!this._operation && this.longNumber.length !== 0) {
            this.concatNum(num)
        }

        this._status = num
        this.longNumber.push(this._status)
        return this.status()
    }
    four() {
        const num = 4

        if (!this._operation && this.longNumber.length !== 0) {
            this.concatNum(num)
        }

        this._status = num
        this.longNumber.push(this._status)
        return this.status()
    }
    five() {
        const num = 5

        if (!this._operation && this.longNumber.length !== 0) {
            this.concatNum(num)
        }

        this._status = num
        this.longNumber.push(this._status)
        return this.status()
    }
    six() {
        const num = 6

        if (!this._operation && this.longNumber.length !== 0) {
            this.concatNum(num)
        }

        this._status = num
        this.longNumber.push(this._status)
        return this.status()
    }
    seven() {
        const num = 7

        if (!this._operation && this.longNumber.length !== 0) {
            this.concatNum(num)
        }

        this._status = num
        this.longNumber.push(this._status)
        return this.status()
    }
    eight() {
        const num = 8

        if (!this._operation && this.longNumber.length !== 0) {
            this.concatNum(num)
        }

        this._status = num
        this.longNumber.push(this._status)
        return this.status()
    }
    nine() {
        const num = 9

        if (!this._operation && this.longNumber.length !== 0) {
            this.concatNum(num)
        }

        this._status = num
        this.longNumber.push(this._status)
        return this.status()
    }
    zero() {
        const num = 0

        if (!this._operation && this.longNumber.length !== 0) {
            this.concatNum(num)
        }

        this._status = num
        this.longNumber.push(this._status)
        return this.status()
    }
    sum() {

        this.numbers.push(this._status)
        this._operation = '+'
        if (this.numbers.length > 1) {

            let count = 0;
            for (var i = 0; i < this.numbers.length; i++) {
                count += this.numbers[i]
            }
            this._count = count;

            this._status = this._count;
        }

    }
    negate() {
        this._operation = 'neg'
        this._status = -this._status
        this.numbers[this.numbers.length - 1] = this._status

    }
    subs() {
        this._operation = '-'
        if (this.numbers.length > 1) {

            let count = this.numbers[0];
            for (var i = 1; i < this.numbers.length; i++) {
                count -= this.numbers[i]
            }
            this._count = count;

            this._status = this._count;
        }
    }
    mul() {
        this._operation = '*'
        if (this.numbers.length > 1) {

            let count = this.numbers[0];
            for (var i = 1; i < this.numbers.length; i++) {
                count *= this.numbers[i]
            }
            this._count = count;

            this._status = this._count;
        }
    }
    div() {
        this._operation = '/'
        if (this.numbers.length > 1) {

            let count = this.numbers[0];
            for (var i = 1; i < this.numbers.length; i++) {
                count /= this.numbers[i]
            }
            this._count = count;

            this._status = this._count;
        }
    }
    result() {
        switch (this._operation) {
            case '+':
                this.sum()
                break;
            case '-':
                this.subs()
                break;
            case '*':
                this.mul()
                break;
            case '/':
                this.div()
                break;
            default:
                this.status()
                break;
        }
        this._count = 0;
    }
    status() {
        return this._status
    }
}