import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../header/Header';

const Landing = () => {
    return (
        <div className="animated fadeIn">
            <Header isLogged={false} />

            <div className="container">
                <div className="row justify-content-center mt-5">
                    <h1>
                        🎬 Do you think you know everything about film actors?🎭
                    </h1>
                </div>
                <div className="row justify-content-center mt-4 mb-3">
                    <h2 className="font-italic">Show it by playing our ...</h2>
                </div>
                <div className="row justify-content-center mt-1">
                    <h2 className="font-weight-bold">
                        Cinema<span className="text-warning">Quiz</span>
                    </h2>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-4">
                        <Link
                            to="/login"
                            className="btn btn-info btn-lg btn-block"
                        >
                            Login
                        </Link>
                    </div>
                    <div className="col-4">
                        <Link
                            to="/register"
                            className="btn btn-secondary btn-lg btn-block"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
