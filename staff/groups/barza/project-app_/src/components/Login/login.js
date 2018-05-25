import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className="content">
            <header>
                <h2>FitFood💪</h2>
            </header>
            <div className="p-intro">
                <form action="/landing.html">
                    <div>
                        <p>
                            <input
                                className="text"
                                type="text"
                                name="user"
                                placeholder="username"
                            />
                        </p>
                        <p>
                            <input
                                className="text"
                                type="password"
                                name="password"
                                placeholder="password"
                            />
                        </p>
                    </div>
                    <div className="btns">
                        <input
                            className="buttons"
                            type="submit"
                            defaultValue="Login"
                        />
                    </div>
                </form>
            </div>
            <div className="p-regist">
                <p>
                    Not registred?
                    <Link to="/register">
                        <span id="span">Create an account</span>
                    </Link>
                </p>
            </div>
            <div className="content-right" />
        </section>
    );
};
export default Login;
