'use strict'

class RockPaperScissors {
    constructor (player1,player2) {
        this.player1=player1
        this.player2=player2
        this._score1=0
        this._score2=0
        this._state=[]
        this._status=RockPaperScissors.CONTINUE
    }

    play(h1,h2) {
        if (this._status===RockPaperScissors.GAMEOVER) {
            throw Error('GAME OVER!')
        }
        if (typeof h1 !=='string' || typeof h2 !=='string') {
            throw Error('invalid hands')
        }
        if ((h1.toLowerCase().trim()==='paper' || h1.toLowerCase().trim()==='rock' || h1.toLowerCase().trim()==='scissors') && (h2.toLowerCase().trim()==='paper' || h2.toLowerCase().trim()==='rock' || h2.toLowerCase().trim()==='scissors')) {
            this._state.push({'player1':h1,'player2':h2})
            if (h1!==h2) {
                if ((h1==='rock' && h2==='scissors')||(h1==='scissors' && h2==='paper')||(h1==='paper' && h2==='rock')) {
                    this._score1++
                }
                else {
                    this._score2++
                }
            }
            if ((this._score1===2||this._score2===2)||(this._state.length===3 && ((this._score1===1 && this._score2===0 )||(this._score1===0 && this._score2===1)))||(this._state.length>3 && (this._score1!==this._score2))) {
                this._status=RockPaperScissors.GAMEOVER
            }
            else {
                this._status=RockPaperScissors.CONTINUE
            }
        }
        else {
            throw Error('invalid hands')
        }
    }

    
    state() {
        return this._state
    }
    status() {
        return this._status
    }
    winner() {
        if (this._status===RockPaperScissors.GAMEOVER) {
            if (this._score1>this._score2) {
                return this.player1
            }
            else {
                return this.player2
            }
        }
        else {
            return undefined
        }
    }
    static get CONTINUE() {return 0}
    static get GAMEOVER() {return 1}
}