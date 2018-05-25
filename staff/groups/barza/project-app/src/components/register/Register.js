import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logic from '../../logic';
import 'animate.css';
import swal from 'sweetalert2';

import Header from '../header/Header';

class Register extends Component {
    state = {
        username: '',
        email: '',
        repeatEmail: '',
        password: '',
        repeatPassword: '',
        redirect: false
    };

    handlerRegister = e => {
        e.preventDefault();

        let error = false;
        let msg = '';

        if (this.state.email !== this.state.repeatEmail) {
            error = true;
            msg += '<p>Email and repeat-Email does not match</p>';
        }

        if (this.state.password !== this.state.repeatPassword) {
            error = true;
            msg += '<p>Password and repeat-Password does not match</p>';
        }

        if (error) {
            swal({
                type: 'error',
                title: 'Oops...',
                html: msg,
                animation: false,
                customClass: 'animated flipInX'
            });
        } else {
            const user = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            };

            logic.registerUser(user).then(userData => {
                userData.status === 'OK'
                    ? swal('Registered', 'Go to login', 'success').then(
                          result => {
                              if (result) this.setState({ redirect: true });
                          }
                      )
                    : swal('Warning', userData.error, 'warning');
            });
        }
    };

    handleInput = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        if (this.state.redirect) return <Redirect to="/login" />;

        return (
            <div className="animated fadeIn">
                <Header isLogged={false} />

                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-xs-12 col-sm-10 col-md-8 col-xs-6">
                            <div className="card">
                                <div className="card-header text-center bg-dark text-white">
                                    <h5 className="card-title no-margin">
                                        REGISTER
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handlerRegister}>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name="username"
                                                placeholder="Enter your username"
                                                value={this.state.username}
                                                onChange={this.handleInput}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control "
                                                placeholder="Enter your email"
                                                value={this.state.email}
                                                onChange={this.handleInput}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Repeat Email</label>
                                            <input
                                                type="email"
                                                name="repeatEmail"
                                                className="form-control "
                                                placeholder="Repeat your email"
                                                value={this.state.repeatEmail}
                                                onChange={this.handleInput}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control "
                                                placeholder="Enter your password"
                                                value={this.state.password}
                                                onChange={this.handleInput}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Repeat Password</label>
                                            <input
                                                type="password"
                                                name="repeatPassword"
                                                className="form-control "
                                                placeholder="Change password"
                                                value={
                                                    this.state.repeatPassword
                                                }
                                                onChange={this.handleInput}
                                            />
                                        </div>

                                        <span className="float-right">
                                            <Link to="/login">
                                                Already registered?
                                            </Link>
                                        </span>
                                        <div className="clearfix" />
                                        <hr />

                                        <span className="float-right">
                                            <button
                                                type="submit"
                                                className="btn btn-outline-secondary btn-lg"
                                            >
                                                Register
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

export default Register;
