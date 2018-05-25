import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logic from '../../logic';
import swal from 'sweetalert';

class Register extends Component {
    state = {
        username: '',
        email: '',
        repeatEmail: '',
        password: '',
        repeatPassword: ''
    };

    handlerRegister = e => {
        e.preventDefault();

        const user = this.state;
        logic.registerUser(user).then(user => {
            if (user.status === 'OK')
                swal('Registered', 'Go to login', 'success');
            else swal('Warning', user.error, 'warning');
        });
    };
    handlerInput = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    };
    render() {
        return (
            <section className="content">
                <header>
                    <h2>FitFood💪</h2>
                </header>
                <form className="form-register" onSubmit={this.handlerRegister}>
                    <div id="username">
                        <p className="keys" id="user">
                            Username
                        </p>
                        <input
                            className="text"
                            id="user-E"
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={this.handlerInput}
                        />
                    </div>
                    <div id="email">
                        <p className="keys" id="email-N">
                            Email
                        </p>
                        <input
                            className="text"
                            id="email-E"
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.handlerInput}
                        />
                    </div>
                    <div id="rep-email">
                        <p className="keys" id="reemail-N">
                            Repeat-Email
                        </p>
                        <input
                            className="text"
                            id="reemail-E"
                            type="email"
                            name="repeatEmail"
                            placeholder="Repeat-Email"
                            onChange={this.handlerInput}
                        />
                    </div>
                    <div id="password">
                        <p className="keys" id="password-N">
                            Password
                        </p>
                        <input
                            className="text"
                            id="password-E"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handlerInput}
                        />
                    </div>
                    <div id="rep-password">
                        <p className="keys" id="repass">
                            Repeat-Password
                        </p>
                        <input
                            className="text"
                            id="repass-E"
                            type="password"
                            name="repeatPassword"
                            placeholder="Repeat-Password"
                            onChange={this.handlerInput}
                        />
                    </div>
                    <div className="btns">
                        <input
                            className="buttons"
                            type="submit"
                            defaultValue="Register"
                        />
                    </div>
                    <div className="p-regist">
                        <p>
                            Already registered?
                            <Link to="/login">
                                <span id="span">Log in</span>
                            </Link>
                        </p>
                    </div>
                </form>
                <div className="content-right" />
            </section>
        );
    }
}

export default Register;
