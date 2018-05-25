import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import swal from 'sweetalert2';

import logic from '../../logic';

import Header from '../header/Header';

class Login extends Component {
    state = {
        username: '',
        password: '',
        isLogged: false
    };

    handleSubmitLogin = e => {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        };

        logic.loginUser(user).then(userData => {
            if (userData.status === 'OK') {
                localStorage.setItem('user', JSON.stringify(userData.data));

                this.setState({
                    isLogged: true
                });
            } else {
                swal('Warning', userData.error, 'warning');
            }
        });
    };

    handleInputUsername = e => {
        const value = e.target.value;

        this.setState({
            username: value
        });
    };

    handleInputPassword = e => {
        const value = e.target.value;

        this.setState({
            password: value
        });
    };

    render() {
        if (this.state.isLogged) return <Redirect to="/home" />;

        return (
            <div className="animated fadeIn">
                <Header isLogged={false} />

                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-xs-12 col-sm-10 col-md-8 col-xs-6">
                            <div className="card">
                                <div className="card-header text-center bg-dark text-white">
                                    <h5 className="card-title no-margin">
                                        LOGIN
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmitLogin}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="user"
                                                placeholder="Enter your username"
                                                value={this.state.username}
                                                onChange={
                                                    this.handleInputUsername
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="Enter your password"
                                                value={this.state.password}
                                                onChange={
                                                    this.handleInputPassword
                                                }
                                            />
                                        </div>
                                        <span className="float-right">
                                            <Link to="/register">
                                                Not registered?
                                            </Link>
                                        </span>
                                        <div className="clearfix" />
                                        <hr />

                                        <span className="float-right">
                                            <button
                                                type="submit"
                                                className="btn btn-outline-info btn-lg"
                                            >
                                                Login
                                            </button>
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
