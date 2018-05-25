import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert2';

import 'animate.css';

import logic from './../../logic/';

import Header from '../header/Header';

class UpdateProfile extends Component {
    state = {
        isLoading: true,
        isLogged: true,
        tokenExpired: false,
        redirect: false,

        username: '',
        newUsername: '',
        email: '',
        age: '',
        country: '',
        gender: '',
        telNumber: '',
        password: '',
        newPassword: '',
        id: ''
    };

    componentDidMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));

            logic.token = user.token;

            logic.retrieveUser(user.id).then(res => {
                if (res.status === 'OK') {
                    this.setState({
                        newUsername: res.data.username,
                        username: res.data.username,
                        email: res.data.email,
                        age: res.data.age,
                        country: res.data.country,
                        gender: res.data.gender,
                        telNumber: res.data.telNumber,
                        password: res.data.password,
                        newPassword: res.data.newPassword,
                        id: res.data.id,

                        isLoading: false
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

    handleWriteInputNewUsername = e => {
        let value = e.target.value;
        this.setState({
            newUsername: value
        });
    };

    handleWriteInputEmail = e => {
        let value = e.target.value;

        this.setState({
            email: value
        });
    };

    handleWriteInputAge = e => {
        let value = e.target.value;

        this.setState({
            age: value
        });
    };

    handleWriteInputCountry = e => {
        let value = e.target.value;

        this.setState({
            country: value
        });
    };

    handleWriteInputGender = e => {
        let value = e.target.value;

        this.setState({
            gender: value
        });
    };

    handleWriteInputTelNumber = e => {
        let value = e.target.value;

        this.setState({
            telNumber: value
        });
    };

    handleWriteInputPassword = e => {
        let value = e.target.value;

        this.setState({
            password: value
        });
    };

    handleWriteInputNewPassword = e => {
        let value = e.target.value;

        this.setState({
            newPassword: value
        });
    };

    handleSubmitUpdateProfile = e => {
        e.preventDefault();

        const {
            username,
            newUsername,
            email,
            age,
            country,
            gender,
            telNumber,
            password,
            newPassword
        } = this.state;

        const updateUser = {
            username: username,
            newUsername: newUsername,
            email: email,
            age: age,
            country: country,
            gender: gender,
            telNumber: telNumber,
            password: password,
            newPassword: newPassword
        };

        logic.updateUser(this.state.id, updateUser).then(res => {
            if (res.status === 'OK') {
                swal({
                    title: 'Update Profile!',
                    type: 'success',
                    animation: false,
                    customClass: 'animated flipInX'
                }).then(result => {
                    if (result) this.setState({ redirect: true });
                });
            } else {
                swal({
                    title: 'Updail Fail!',
                    type: 'error',
                    text: res.error,
                    animation: false,
                    customClass: 'animated flipInX'
                });
            }
        });
    };

    renderUpdate = () => {
        if (this.state.tokenExpired || !this.state.isLogged)
            return <Redirect to="/login" />;

        if (this.state.isLoading) return <span>Loading user data...</span>;

        if (this.state.redirect) return <Redirect to="/profile" />;

        const {
            newUsername,
            email,
            age,
            country,
            gender,
            telNumber,
            password,
            newPassword
        } = this.state;

        return (
            <div className="animated fadeIn">
                <Header isLogged={this.state.isLogged} />

                <div className="row justify-content-center mb-5">
                    <div className="col-10">
                        <div className="card mt-4">
                            <div className="card-header bg-dark text-white">
                                <h5 className="card-title no-margin">
                                    EDIT YOUR PROFILE
                                </h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmitUpdateProfile}>
                                    <div className="form-group">
                                        <label>* Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your username"
                                            value={newUsername}
                                            onChange={
                                                this.handleWriteInputNewUsername
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>* Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter your actual password"
                                            value={password}
                                            onChange={
                                                this.handleWriteInputPassword
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={
                                                this.handleWriteInputEmail
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter your age"
                                            value={age}
                                            onChange={this.handleWriteInputAge}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your country"
                                            value={country}
                                            onChange={
                                                this.handleWriteInputCountry
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your gender"
                                            value={gender}
                                            onChange={
                                                this.handleWriteInputGender
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Telephone</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter your telephone"
                                            value={telNumber}
                                            onChange={
                                                this.handleWriteInputTelNumber
                                            }
                                        />
                                    </div>

                                    <hr />
                                    <p className="text-danger">
                                        Only if you want to change your Password
                                    </p>
                                    <div className="form-group">
                                        <label>New Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter a new password"
                                            value={newPassword}
                                            onChange={
                                                this.handleWriteInputNewPassword
                                            }
                                        />
                                    </div>

                                    <p className="font-weight-bold">
                                        * Required fields
                                    </p>

                                    <span className="float-right">
                                        <button
                                            type="submit"
                                            className="btn btn-outline-success btn-lg"
                                        >
                                            Update Profile
                                        </button>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return this.renderUpdate();
    }
}

export default UpdateProfile;
