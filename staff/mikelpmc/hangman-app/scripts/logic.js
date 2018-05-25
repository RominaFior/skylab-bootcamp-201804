'use strict';

const Hangman = (function() {
    class Hangman {
        constructor(word, attempts = 10) {
            if (word === undefined) throw Error('invalid word ' + word);

            this._word = word;
            this.setWord = word => (_word = word);
            this.getWord = () => this._word;

            this._attempts = attempts;
            this.wordArray = Array.from({ length: this.getWord().length }).fill(
                '_'
            );
        }

        try(str) {
            if (typeof str !== 'string')
                throw Error('invalid letter or word ' + str);

            str = str.trim();

            if (!str.length) throw Error('text cannot be empty');

            if (str.length === 1) {
                let found = false;
                this.getWord()
                    .split('')
                    .forEach((letter, index) => {
                        if (letter === str) {
                            this.wordArray[index] = str;
                            found = true;
                        }
                    });

                if (!found) {
                    this._attempts--;
                }

                return found;
            } else {
                if (str === this.getWord()) {
                    this.wordArray = this.getWord().split('');
                    return true;
                } else {
                    this._attempts = 0;
                    return false;
                }
            }
        }

        guessed() {
            return this.wordArray;
        }

        attempts() {
            return this._attempts;
        }

        status() {
            // HA GANADO
            if (!this.wordArray.includes('_')) {
                return Hangman.WIN;
            } else {
                // NO HA GANADO
                if (this._attempts > 0) {
                    return Hangman.CONTINUE;
                } else if (this._attempts === 0) {
                    return Hangman.LOSE;
                }
            }
        }

        static get CONTINUE() {
            return 'CONTINUE';
        }
        static get LOSE() {
            return 'LOSE';
        }
        static get WIN() {
            return 'WIN';
        }
    }

    const tryLetter = letter => {
        //TODO
    };

    const tryWord = word => {
        //TODO
    };

    return Hangman;
})();
