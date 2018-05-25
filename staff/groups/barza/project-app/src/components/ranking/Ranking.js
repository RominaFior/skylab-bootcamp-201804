import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Header from './../header/Header';

import logic from './../../logic/';

class Ranking extends Component {
    state = {
        users: {},
        isLoading: true,
        isLogged: true,
        tokenExpired: false
    };

    componentDidMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));

            logic.token = user.token;

            logic.retrieveUsers().then(res => {
                if (res.status === 'OK') {
                    const usersWithRanking = res.data.filter(user =>
                        user.hasOwnProperty('cinemaQuiz')
                    );

                    this.setState({
                        users: usersWithRanking,
                        isLoading: false
                    });
                } else {
                    localStorage.removeItem('user');

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

    renderRanking() {
        return this.state.isLoading ? (
            <span>Loading Ranking...</span>
        ) : (
            <div className="container mt-5">
                <h1 className="text-center">
                    Cinema<span className="text-warning">Quiz</span> World
                    Ranking
                </h1>
                <hr />
                <div className="row justify-content-center mt-5">
                    <div className="col-8">
                        <div className="card animated flipInX">
                            <div className="card-header bg-dark text-white">
                                <h5 className="card-title no-margin">
                                    🏆 Ranking
                                </h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {this.state.users.map(
                                        ({
                                            id,
                                            username,
                                            cinemaQuiz: { score }
                                        }) => {
                                            return (
                                                <li
                                                    key={id}
                                                    className="list-group-item"
                                                >
                                                    <span className="text-uppercase">
                                                        {username}
                                                    </span>{' '}
                                                    - {score}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return this.state.isLogged === false || this.state.tokenExpired ? (
            <Redirect to="/login" />
        ) : (
            <div className="animated fadeIn">
                <Header isLogged={this.state.isLogged} />

                {this.renderRanking()}
            </div>
        );
    }
}
export default Ranking;
