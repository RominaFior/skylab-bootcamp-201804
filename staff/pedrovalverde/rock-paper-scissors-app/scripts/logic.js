'use strict'

class RockPaperScissors {
    constructor(player1, player2) {
        this._player1 = player1
        this._player2 = player2

        let state = {
            'player1': hand1,
            'player2': hand2
        }
    }

    play(hand1, hand2) {
        let options = ['paper', 'scissors', 'rock']
        if (typeof hand1 !== 'string' || typeof hand2 !== 'string') { throw Error('invalid hands') }
        if (options.indexOf(hand1) === -1 || options.indexOf(hand2) === -1) { throw Error('invalid hands') }
    }

    static get CONTINUE() { return 0 }
    static get GAMEOVER() { return 1 }

    status() {

    }

    winner() {

    }
}
