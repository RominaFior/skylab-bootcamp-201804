import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <main>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </main>
    );
};

export default Landing;
