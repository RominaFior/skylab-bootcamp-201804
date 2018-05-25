'use strict';

function RockPaperScissors(player1, player2) {
    this._player1 = player1;
    this._player2 = player2;
    this._symbols = ['rock', 'paper', 'scissors'];
    this._rounds = [];
    this._status = RockPaperScissors.CONTINUE;
}

RockPaperScissors.CONTINUE = 0;
RockPaperScissors.GAMEOVER = 1;

RockPaperScissors.prototype._handsAreStrings = function (hand1, hand2) {
    return typeof hand1 === 'string' && typeof hand2 === 'string';
}

RockPaperScissors.prototype._handsAreValidSymbols = function (hand1, hand2) {
    return this._symbols.indexOf(hand1.trim().toLowerCase()) > -1 && this._symbols.indexOf(hand2.trim().toLowerCase()) > -1;
}

RockPaperScissors.prototype.play = function (hand1, hand2) {
    if (!this._handsAreStrings(hand1, hand2) || !this._handsAreValidSymbols(hand1, hand2)) throw Error('invalid hands');

    hand1 = hand1.trim().toLowerCase();
    hand2 = hand2.trim().toLowerCase();

    if (this._status === RockPaperScissors.CONTINUE) {
        var round = { player1: hand1, player2: hand2 };

        this._rounds.push(round);

        this._updateStatus();
    } else throw Error('GAME OVER!');
};

RockPaperScissors.prototype._updateStatus = function () {
    if (this._rounds.length > 1) {
        var tieOnRound2;

        var results = this._rounds.reduce(function (accum, round, index) {
            var roundWinner = this._roundWinner(round);

            if (roundWinner) accum[roundWinner]++;
            else if (index === 1) tieOnRound2 = true;

            return accum;
        }.bind(this), { player1: 0, player2: 0 });

        if (this._rounds.length === 2 && tieOnRound2) return;

        var winning;

        if (results.player1 > results.player2) winning = this._player1;
        else if (results.player1 < results.player2) winning = this._player2;

        if (winning) {
            this._status = RockPaperScissors.GAMEOVER;
            this._winner = winning;
        }
    }
};

RockPaperScissors.prototype._roundWinner = function (round) {
    if (round.player1 === 'rock' && round.player2 === 'scissors' || round.player1 === 'scissors' && round.player2 === 'paper' || round.player1 === 'paper' && round.player2 === 'rock') return 'player1';

    if (round.player1 === round.player2) return;

    return 'player2';
};

RockPaperScissors.prototype.status = function () { return this._status; };

RockPaperScissors.prototype.state = function () { return this._rounds; };

RockPaperScissors.prototype.winner = function () { return this._winner; };
