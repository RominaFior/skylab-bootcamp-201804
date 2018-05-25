'use strict'

class RockPaperScissors {
    constructor(player1, player2) {

        this._player1 = player1
        this._player2 = player2
        this._rounds = []
        this._status = RockPaperScissors.CONTINUE
    }

    play(hand1, hand2) {

        const options = ['paper', 'scissors', 'rock']

        if (arguments.length === 0) { throw Error('invalid hands') }
        if (typeof hand1 === 'boolean' || typeof hand2 === 'boolean') { throw Error('invalid hands') }
        if (typeof hand1 === 'number' || typeof hand2 === 'number') { throw Error('invalid hands') }
        if (options.indexOf(hand1) === -1 || options.indexOf(hand2) === -1) { throw Error('invalid hands') }
        if (hand1 === undefined || hand2 === undefined) { throw Error('invalid hands') }
        if ((typeof hand1 === 'Array' || 'Object') || (typeof hand2 === 'Array' || 'Object')) { throw Error('invalid hands') }

        if ((hand1 === 'scissors' || 'paper' || 'rock') && (hand2 === 'scissors' || 'paper' || 'rock'))

            if (this._status === RockPaperScissors.CONTINUE) {
                let round = { player1: hand1, player2: hand2 }

                this._rounds.push(round)

                this._updateStatus() //

            } else throw Error('GAME OVER!');

        // status()

    }

    static get CONTINUE() { return 0 }

    static get GAMEOVER() { return 1 }


    _updateStatus() {

        if (this._rounds.length < 2) {
            this._status = RockPaperScissors.CONTINUE
            play()
        }

        let scoring1 = 0
        let scoring2 = 0
        let noScoring = 0
        let winner

        for (let i = 0; i < this._rounds.length; i++) {
            switch (this._rounds[i]) {
                case '{player1: "paper", player2: "rock"}': scoring1++
                    break

                case '{player1: "scissors", player2: "paper"}': scoring1++
                    break

                case '{player1: "rock", player2: "scissors"}': scoring1++
                    break

                case '{player1: "rock", player2: "paper"}': scoring2++
                    break

                case '{player1: "paper", player2: "scissors"}': scoring2++
                    break

                case '{player1: "scissors", player2: "rock"}': scoring2++
                    break

                case '{player1: "scissors", player2: "scissors"}': noScoring++
                    break

                case '{player1: "rock", player2: "rock"}': noScoring++
                    break

                case '{player1: "paper", player2: "paper"}': noScoring++
                    break
            }
        }

        if (scoring1 === scoring2) {
            this._status = RockPaperScissors.CONTINUE
        } else if (scoring1 > scoring2) {
            winner = this._player1
            this._status = RockPaperScissors.GAMEOVER
            this._roundWinner = player1
        } else {
            console.log(this.player2 + 'is the _roundWinner!')
            this._status = RockPaperScissors.GAMEOVER
            this._roundWinner = player2
        }

    }

    _roundWinner(round) {

        if (this._status === RockPaperScissors.CONTINUE) {
            play()
        } else {
            return this._roundWinner
        }
    }

}

function status() { return this._status }

function ListeningStateChangedEvent() {return this._rounds}
function winner() { return this._roundWinner }



// 'paper', 'rock'
// 'rock', 'scissors'
// 'scissors', 'paper'
// 'rock', 'paper'
// 'paper', 'scissors'
// 'scissors', 'rock'
// 'paper', 'paper'
// 'scissors', 'scissors'
// 'rock', 'rock'