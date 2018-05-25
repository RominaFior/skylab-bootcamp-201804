import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import imgPlay from './../../static/images/cinemaTicket.jpeg';
import imgRanking from './../../static/images/ranking.png';

import Header from '../header/Header';

class Home extends Component {
    state = {
        isLogged: true,
        isLoading: true
    };

    componentDidMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user.token;

            token.length && this.setState({ isLogged: true });
        } else {
            this.setState({
                isLogged: false
            });
        }
    }

    render() {
        return this.state.isLogged === false ? (
            <Redirect to="/" />
        ) : (
            <div className="animated fadeIn">
                <Header isLogged={this.state.isLogged} />

                <div className="container mt-5">
                    <h1>Sweet Home Alabama</h1>
                    <hr />
                    <h3>
                        Welcome to the Cinema<span className="text-warning">
                            Quiz
                        </span>{' '}
                        Game!
                    </h3>
                    <h5>Made with ❤️ by Yanina, Sergio and Mikel</h5>
                </div>

                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <Link to="/play">
                            <div className="card animated flipInX">
                                <img
                                    className="card-img-top img-fluid"
                                    style={{ height: '300px' }}
                                    src={imgPlay}
                                    alt="Card cap"
                                />
                                <div className="card-footer">
                                    <button className="btn btn-info btn-lg btn-block">
                                        PLAY
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <Link to="/ranking">
                            <div className="card animated flipInX">
                                <img
                                    className="card-img-top img-fluid"
                                    style={{ height: '300px' }}
                                    src={imgRanking}
                                    alt="Card cap"
                                />
                                <div className="card-footer">
                                    <button className="btn btn-info btn-lg btn-block">
                                        RANKING
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
