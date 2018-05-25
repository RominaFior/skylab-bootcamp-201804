import React, { Component } from "react";
import logic from "../../logic";
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert2'

class Register extends Component {
    state = {
        userName: "",
        password: "",
        repeatPassword: "",
        notMatchingMessage: "",
        registerFailedMessage: ""
    }

    _comparePassword() {

        if ((this.state.password !== this.state.repeatPassword) && this.state.repeatPassword.length) {
            this.setState({
                notMatchingMessage: "Passwords don't match"

            })
        } else {
            this.setState({
                notMatchingMessage: ""
            })
        }
    }

    _handleKeepName = (e) => {
        let userName = e.target.value;
        this.setState({ userName })
    }

    _handleKeepPassword = (e) => {
        let password = e.target.value;

        Promise.resolve().then(() => {
            this.setState({ password })
        }).then(() => {
            this._comparePassword()
        })
    }

    _handleKeepRepeatPassword = (e) => {
        let repeatPassword = e.target.value;

        Promise.resolve().then(() => {
            this.setState({ repeatPassword })
        }).then(() => {
            this._comparePassword()
        })
    }

    _handleRegister = (e) => {
        e.preventDefault();
        if (this.state.notMatchingMessage === '') {

            logic.register(this.state.userName, this.state.password)
                .then(res => {

                    if (res.status === 'OK') {
                        swal({
                            type: 'success',
                            title: 'You registered awesomely!',
                            text: 'Now please proceed to Sign In.',
                        })
                        this.props.history.push('/login')
                    }
                    else {
                        swal({
                            type: 'error',
                            title: 'Oops...',
                            text: res.error,
                        })
                        this.setState({ registerFailedMessage: res.error })
                    }
                })
        } else {
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Passwords don\'t match',
            })
        }
    }


    render() {
        return <div className="container">
            <h2 className="text-center ">REGISTER </h2>

            <form onSubmit={this._handleRegister}>
                <div className="row justify-content-center  ">
                    <input className="form-group col-xs-4 mt-4 border pl-3" value={this.state.userName} onChange={this._handleKeepName} type="text"
                        placeholder="User name" />
                </div>
                <div className="row justify-content-center ">
                    <input className="form-group col-xs-4 mt-4 border pl-3" value={this.state.password} onChange={this._handleKeepPassword} type="password"
                        placeholder="Password" />
                </div>
                <div className="row justify-content-center ">
                    <input className="form-group col-xs-4 mt-4 border pl-3" value={this.state.repeatPassword} onChange={this._handleKeepRepeatPassword}
                        type="password" placeholder="Repeat Password" />
                </div>
                <div className="row justify-content-center ">

                    <p className="text-danger text-capitalize">{this.state.notMatchingMessage}</p>
                </div>

                <div className="row justify-content-center ">

                </div>
                <div className="row justify-content-center ">

                    <input className="row justify-content-center mb-3 btn bg-darkcyan" type="submit" value="Register" />
                </div>
            </form>

        </div>
    }

}

export default withRouter(Register);