'use strict';

const Calculator = (function() {
    class Calculator {
        constructor() {
            this._display = '';
            this._status = '';
            this._numbers = [];
            this._currenOperation = '';
        }

        one() {
            this._display += 1;
            this._status = this._display;
        }

        two() {
            this._display += 2;
            this._status = this._display;
        }

        three() {
            this._display += 3;
            this._status = this._display;
        }

        four() {
            this._display += 4;
            this._status = this._display;
        }

        five() {
            this._display += 5;
            this._status = this._display;
        }

        six() {
            this._display += 6;
            this._status = this._display;
        }

        seven() {
            this._display += 7;
            this._status = this._display;
        }

        eight() {
            this._display += 8;
            this._status = this._display;
        }

        nine() {
            this._display += 9;
            this._status = this._display;
        }

        zero() {
            this._display += 0;
            this._status = this._display;
        }

        negate() {
            const res =
                Math.sign(parseInt(this._status)) === 1
                    ? -this._status
                    : this._status;

            this._status = res;
            this._display = res;
        }

        sum() {
            this._numbers.push(parseInt(this._display));

            if (this._numbers.length > 1) {
                this._status = this._numbers.reduce((acc, curr) => {
                    return acc + curr;
                });
            } else {
                this._status = parseInt(this._display);
            }

            this._display = '';
            this._currenOperation = '+';
        }

        sub() {
            this._numbers.push(parseInt(this._display));

            if (this._numbers.length > 1) {
                this._status = this._numbers.reduce((acc, curr) => {
                    return acc - curr;
                });
            } else {
                this._status = parseInt(this._display);
            }

            this._display = '';
            this._currenOperation = '-';
        }

        mul() {
            this._numbers.push(parseInt(this._display));

            if (this._numbers.length > 1) {
                this._status = this._numbers.reduce((acc, curr) => {
                    return acc * curr;
                });
            } else {
                this._status = parseInt(this._display);
            }

            this._display = '';
            this._currenOperation = '*';
        }

        div() {
            this._numbers.push(parseInt(this._display));

            if (this._numbers.length > 1) {
                this._status = this._numbers.reduce((acc, curr) => {
                    return acc / curr;
                });
            } else {
                this._status = parseInt(this._display);
            }

            this._display = '';
            this._currenOperation = '/';
        }

        status() {
            if (this._status === '') this._status = parseInt(this._display);
            return parseInt(this._status);
        }

        result() {
            this._numbers.push(parseInt(this._display));

            switch (this._currenOperation) {
                case '+':
                    this._status = resolveSum(this);
                    break;
                case '-':
                    this._status = resolveSub(this);
                    break;
                case '*':
                    this._status = resolveMul(this);
                    break;
                case '/':
                    this._status = resolveDiv(this);
                    break;
            }
        }
    }

    function resolveSum(instance) {
        return instance._numbers.reduce((acc, num) => {
            return acc + num;
        });
    }

    function resolveSub(instance) {
        return instance._numbers.reduce((acc, num) => {
            return acc - num;
        });
    }

    function resolveMul(instance) {
        return instance._numbers.reduce((acc, num) => {
            return acc * num;
        });
    }

    function resolveDiv(instance) {
        return instance._numbers.reduce((acc, num) => {
            return acc / num;
        });
    }

    return Calculator;
})();
