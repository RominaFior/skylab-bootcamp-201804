import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert2';
import dayjs from 'dayjs';

import Header from '../header/Header';
import GameOver from './../gameOver/GameOver';

import logic from './../../logic/';
import MoviesService from './../../logic/movies';

class Home extends Component {
    state = {
        user: {},
        isLogged: true,
        tokenExpired: false,
        isLoading: true,
        isGameStarted: false,
        answerPlayer: '',
        question: {},
        score: 0,
        rounds: 0,
        isGameOver: false
    };

    componentDidMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));

            logic.token = user.token;

            logic.retrieveUser(user.id).then(res => {
                if (res.status === 'OK') {
                    this.setState({
                        user: res.data,
                        isLogged: true
                    });
                } else {
                    this.setState({
                        tokenExpired: true
                    });
                }
            });
        } else {
            this.setState({
                isLogged: false
            });
        }
    }

    handleAnswerPlayer = e => {
        const value = e.target.value;

        this.setState({
            answerPlayer: value
        });
    };

    startGame = () => {
        MoviesService.getQuestion().then(res => {
            this.setState({
                question: res,
                isLoading: false,
                isGameStarted: true,
                isGameOver: false,
                score: 0,
                rounds: 1,
                answerPlayer: ''
            });
        });
    };

    handleSubmitAnswer = e => {
        e.preventDefault();

        let { rounds, score } = this.state;

        let newScore = score;

        if (
            MoviesService.checkAnswer(
                this.state.answerPlayer,
                this.state.question.name
            )
        ) {
            swal({
                title: 'Great!!',
                type: 'success'
            });

            newScore++;
        } else {
            swal({
                title: 'ooh...Fail...',
                text: 'Correct answer: ' + this.state.question.name,
                type: 'error'
            });
        }

        const newRounds = rounds + 1;

        MoviesService.getQuestion().then(res => {
            this.setState({
                question: res,
                isLoading: false,
                rounds: newRounds,
                score: newScore,
                answerPlayer: ''
            });
        });
    };

    renderQuestion = () => {
        if (!this.state.isGameStarted) return;

        if (this.state.isLoading) return <span>Loading question...</span>;

        if (this.state.isGameOver)
            return (
                <GameOver
                    score={this.state.score}
                    user={this.state.user}
                    playAgain={this.startGame}
                />
            );

        if (this.state.rounds > 5) {
            this.setState({
                isGameOver: true
            });
        } else {
            const { img, birthday, born, movies } = this.state.question;

            return (
                <div>
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <h4 className="">#Round: {this.state.rounds}/5</h4>
                            <h4 className="">Score: {this.state.score}</h4>
                        </div>
                    </div>

                    <hr />

                    <div className="row justify-content-center animated flipInX">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="card mb-3">
                                <img
                                    className="card-img-top"
                                    src={img}
                                    alt="actor/actress"
                                />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="card-body bg-secondary text-white">
                                    <h4>Information</h4>
                                    <p>
                                        {dayjs(birthday).format('DD/MM/YYYY')}
                                    </p>
                                    <p>{born}</p>
                                    <ul className="list-group text-dark">
                                        {movies.map(movie => {
                                            return (
                                                <li
                                                    key={movie.id}
                                                    className="list-group-item"
                                                >
                                                    {movie.title}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <form onSubmit={this.handleSubmitAnswer}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={
                                                    this.handleAnswerPlayer
                                                }
                                                placeholder="Enter the name of the actor/actress"
                                                value={this.state.answerPlayer}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-info btn-block"
                                        >
                                            Try
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    render() {
        return this.state.tokenExpired || this.state.isLogged === false ? (
            <Redirect to="/" />
        ) : (
            <div className="animated fadeIn">
                <Header isLogged={this.state.isLogged} />

                <div className="container mt-5">
                    {!this.state.isGameStarted && (
                        <div>
                            <div className="row justify-content-center text-center">
                                <div className="col-xs-10 col-sm-10 col-md-8 col-lg-11">
                                    <h2 className="font-weight-bold text-center">
                                        Cinema<span className="text-warning">
                                            Quiz
                                        </span>
                                    </h2>
                                    <h4 className="mt-4">
                                        This game consists in guessing the actor
                                        or actress that appears on the screen.
                                    </h4>
                                    <h4 className="mt-3 mb-2">
                                        You will be shown the following
                                        information:{' '}
                                    </h4>
                                </div>
                                <div className="card mt-3 mb-4">
                                    <div className="card-body bg-secondary text-white text-center">
                                        <ul className="list-group text-dark bg-secondary font-italic">
                                            <li className="list-group-item">
                                                <h4>Image</h4>
                                            </li>
                                            <li className="list-group-item">
                                                <h4>Date of birth</h4>
                                            </li>
                                            <li className="list-group-item">
                                                <h4>Place of birth</h4>
                                            </li>
                                            <li className="list-group-item">
                                                <h4>
                                                    Three movies where she/he
                                                    acted
                                                </h4>
                                            </li>
                                        </ul>
                                        <h4 className="mt-3">Good luck!</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-xs-10 col-sm-10 col-md-6 col-lg-6">
                                    <button
                                        onClick={this.startGame}
                                        className="btn btn-info btn-lg btn-block mb-3"
                                    >
                                        PLAY!
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {this.renderQuestion()}
                </div>
            </div>
        );
    }
}

export default Home;
