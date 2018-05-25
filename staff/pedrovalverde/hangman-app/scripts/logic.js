'use strict'
class Hangman {

    constructor(wordToGuess, attempts = 10) {
        if (typeof wordToGuess === 'undefined') throw Error('invalid input word');
        this.wordToGuess = wordToGuess.trim();
        if (!this.wordToGuess.length) throw Error("word cannot be empty or blank");
        this.attempts = attempts;
        if (typeof this.attempts !== "number") throw Error("Invalid attemps ");
        if (this.attempts <= 0) throw Error("Invalid number of attempts");
        this.status = Hangman.CONTINUE;
        this.showGuessed = new Array(this.wordToGuess.length).fill('_');

    }

    static get CONTINUE() { return 0 }
    static get WIN() { return 1 }
    static get LOSE() { return 2 }

    try(letter) {
        // TO DO                
    }

    guessed() {
        return this.showGuessed; 
        
    }

    attempts() {
        return this.attempts;
    }

    status() {
        return this.status;
    }
}

function update(objeto) {
    if (objeto.attempts <= 0) {
        objeto.status = Hangman.LOSE;
    } else if (objeto.guessed().indexOf('_') === -1 && objeto.attempts > 0) {
        objeto.status = Hangman.WIN;
    } else {
        objeto.status = Hangman.CONTINUE;
    }
}

function tryLetter(objeto, letter) {

}

function tryWord(objeto, word) {

}
