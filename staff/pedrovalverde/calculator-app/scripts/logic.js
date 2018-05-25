'use strict'
class Calculator {
    constructor() {
        this.displayContent = 0; // contenido mostrado en pantalla
        this.accum = 0; // acumulador de operaciones
        this.isOperator = false; //aux var que almacena la ULTIMA operacion
        this.generatedNumber = ""; //genera un numero cifra a cifra
        this.currentOperation = "";
    }

    status() { // retorna el valor mostrado por pantalla
        if (!this.isOperator) {
            this.displayContent = Number(this.generatedNumber);
        } else {
            this.displayContent = this.accum;
            this.isOperator = false;
        }
        return this.displayContent;
    }

    negate() {
        this.generatedNumber = Number(this.generatedNumber) * (-1);
    }

    sum() {
        if (this.accum === 0) {
            this.accum = Number(this.generatedNumber);
        } else {
            this.accum += Number(this.generatedNumber);
        }
        this.generatedNumber = "";
        this.displayContent = this.accum;
        this.isOperator = true;
        this.currentOperation = "sum";
    }

    sub() {
        if (this.accum === 0) {
            this.accum = Number(this.generatedNumber);
        } else {
            this.accum -= Number(this.generatedNumber);
        }
        this.generatedNumber = "";
        this.displayContent = this.accum;
        this.isOperator = true;
        this.currentOperation = "sub";
    }

    mul() {
        if (this.accum === 0) {
            this.accum = Number(this.generatedNumber);
        } else {
            this.accum *= Number(this.generatedNumber);
        }
        this.generatedNumber = "";
        this.displayContent = this.accum;
        this.isOperator = true;
        this.currentOperation = "mul";
    }

    result() {
        switch (this.currentOperation) {
            case "sum":
                this.generatedNumber = this.accum + Number(this.generatedNumber);
                this.accum = 0;
                this.currentOperation = false;
                break;
            case "sub":
                this.generatedNumber = this.accum - Number(this.generatedNumber);
                this.accum = 0;
                this.currentOperation = false;
                break;
            case "mul":
                this.generatedNumber = this.accum * Number(this.generatedNumber);
                this.accum = 0;
                this.currentOperation = false;
                break;
            case "div":
                this.generatedNumber = this.accum / Number(this.generatedNumber);
                this.accum = 0;
                this.currentOperation = false;
                break;
        }
    }

    div() {
        if (this.accum === 0) {
            this.accum = Number(this.generatedNumber);
        } else {
            this.accum /= Number(this.generatedNumber);
        }
        this.generatedNumber = "";
        this.displayContent = this.accum;
        this.isOperator = true;
        this.currentOperation = "div";
    }

    one() { return this.generatedNumber += '1' }
    two() { return this.generatedNumber += '2' }
    three() { return this.generatedNumber += '3' }
    four() { return this.generatedNumber += '4' }
    five() { return this.generatedNumber += '5' }
    six() { return this.generatedNumber += '6' }
    seven() { return this.generatedNumber += '7' }
    eight() { return this.generatedNumber += '8' }
    nine() { return this.generatedNumber += '9' }
    zero() { return this.generatedNumber += '0' }



}
