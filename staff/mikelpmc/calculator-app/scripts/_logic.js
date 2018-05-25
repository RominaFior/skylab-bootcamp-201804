'use strict';

const Calculator = (function() {
    class Calculator {
        constructor() {
            this._status;
            this._numbers = [];
            this._operation;
        }

        number(number) {
            if (typeof number !== 'number') throw Error('Invalid Number');

            this._status = number;
            this._numbers.push(number);
        }

        // SUMA
        sum() {
            if (this._numbers.length > 1) {
                this._status = this._numbers.reduce((acc, curr) => {
                    return acc + curr;
                }, 0);
            }

            this._operation = '+';
        }

        negate() {
            const res = Math.sign(this._status) ? -this._status : this._status;
            this._status = res;

            //Actualizar el numero actual con el negado en el array
            if (this._numbers.length === 1) this._numbers[0] = this._status;
            if (this._numbers.length > 1)
                this._numbers[this._numbers.length - 1] = this._status;
        }

        // RESTA
        subs() {
            if (this._numbers.length > 1) {
                this._status = this._numbers.reduce((acc, curr) => acc - curr);
            }

            this._operation = '-';
        }

        // MULTIPLICACION
        mul() {
            if (this._numbers.length > 1) {
                this._status = this._numbers.reduce((acc, curr) => acc * curr);
            }

            this._operation = '*';
        }

        // DIVISION
        div() {
            if (this._numbers.length > 1) {
                this._status = this._numbers.reduce((acc, curr) => acc / curr);
            }

            this._operation = '/';
        }

        // RESULTADO OPERACION
        result() {
            switch (this._operation) {
                case '+':
                    this._status = resolveSum(this);
                    break;
                case '-':
                    this._status = resolveSubs(this);
                    break;
                case '*':
                    this._status = resolveMult(this);
                    break;
                case '/':
                    this._status = resolveDiv(this);
                    break;
            }
        }

        // DISPLAY
        status() {
            return this._status;
        }
    }

    function resolveSum(instance) {
        return instance._numbers.reduce((acc, curr) => {
            return acc + curr;
        });
    }

    function resolveSubs(instance) {
        return instance._numbers.reduce((acc, curr) => {
            return acc - curr;
        });
    }

    function resolveMult(instance) {
        return instance._numbers.reduce((acc, curr) => {
            return acc * curr;
        });
    }

    function resolveDiv(instance) {
        return instance._numbers.reduce((acc, curr) => {
            return acc / curr;
        });
    }

    return Calculator;
})();
